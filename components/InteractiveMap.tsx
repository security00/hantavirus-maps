"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import { CircleMarker, LayerGroup, MapContainer, Popup, TileLayer, Tooltip, useMap, useMapEvents } from "react-leaflet";

import type { CaseRecord, OfficialAlert, ReservoirRecord, SourceRecord } from "@/lib/data";

type InteractiveMapProps = {
  casePoints: CaseRecord[];
  alertPoints: OfficialAlert[];
  reservoirs: ReservoirRecord[];
  sourcesById: Record<string, SourceRecord>;
};

type LatLng = [number, number];

type MapFocus =
  | { type: "case"; id: string }
  | { type: "alert"; id: string }
  | { type: "reservoir"; id: string };

const DEFAULT_CENTER: LatLng = [24, -34];

const reservoirRegions: Record<string, { center: LatLng; radiusMeters: number; color: string }> = {
  "deer-mouse-sin-nombre": { center: [39, -110], radiusMeters: 1500000, color: "#34d399" },
  "white-footed-mouse-new-york": { center: [40.5, -82], radiusMeters: 1250000, color: "#22c55e" },
  "cotton-rat-black-creek-canal": { center: [31, -84], radiusMeters: 900000, color: "#84cc16" },
  "rice-rat-bayou": { center: [30, -91], radiusMeters: 750000, color: "#a3e635" },
  "bank-vole-puumala": { center: [61, 20], radiusMeters: 1750000, color: "#2dd4bf" },
  "south-america-andes-rodents": { center: [-38, -70], radiusMeters: 1300000, color: "#fbbf24" }
};

function svgPointToLatLng(point: { x: number; y: number }): LatLng {
  const lng = point.x * 0.36 - 180;
  const lat = 90 - point.y * (180 / 620);

  return [lat, lng];
}

function FocusMap({ focus, lookup }: { focus: MapFocus | null; lookup: Record<string, LatLng> }) {
  const map = useMap();

  useEffect(() => {
    if (!focus) return;

    const position = lookup[`${focus.type}:${focus.id}`];

    if (!position) return;

    map.flyTo(position, Math.max(map.getZoom(), 4), { duration: 0.65 });
  }, [focus, lookup, map]);

  return null;
}

function InteractionTracker({ onInteract }: { onInteract: () => void }) {
  useMapEvents({
    click: onInteract,
    dragstart: onInteract,
    zoomstart: onInteract,
    popupopen: onInteract,
  });

  return null;
}

function FitMap({ points }: { points: LatLng[] }) {
  const map = useMap();
  const bounds = useMemo(() => {
    if (points.length <= 1) return null;

    return L.latLngBounds(points.map(([lat, lng]) => L.latLng(lat, lng))).pad(0.28);
  }, [points]);

  useEffect(() => {
    if (!bounds) return;

    map.fitBounds(bounds, { animate: false });
  }, [bounds, map]);

  return null;
}

export function InteractiveMap({ casePoints, alertPoints, reservoirs, sourcesById }: InteractiveMapProps) {
  const [focus, setFocus] = useState<MapFocus | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const caseMarkers = useMemo(
    () => casePoints
      .filter((record): record is CaseRecord & { mapPoint: NonNullable<CaseRecord["mapPoint"]> } => Boolean(record.mapPoint))
      .map((record) => ({ record, position: svgPointToLatLng(record.mapPoint) })),
    [casePoints]
  );
  const alertMarkers = useMemo(
    () => alertPoints
      .filter((alert): alert is OfficialAlert & { mapPoint: NonNullable<OfficialAlert["mapPoint"]> } => Boolean(alert.mapPoint))
      .map((alert) => ({ alert, position: svgPointToLatLng(alert.mapPoint) })),
    [alertPoints]
  );
  const reservoirMarkers = useMemo(
    () => reservoirs.map((reservoir) => ({
      reservoir,
      region: reservoirRegions[reservoir.id] ?? { center: DEFAULT_CENTER, radiusMeters: 500000, color: "#34d399" }
    })),
    [reservoirs]
  );
  const fitPoints = useMemo(
    () => [...caseMarkers.map((marker) => marker.position), ...alertMarkers.map((marker) => marker.position)],
    [caseMarkers, alertMarkers]
  );
  const focusLookup = useMemo(
    () => Object.fromEntries([
      ...caseMarkers.map((marker) => [`case:${marker.record.id}`, marker.position] as const),
      ...alertMarkers.map((marker) => [`alert:${marker.alert.id}`, marker.position] as const),
      ...reservoirMarkers.map((marker) => [`reservoir:${marker.reservoir.id}`, marker.region.center] as const),
    ]),
    [alertMarkers, caseMarkers, reservoirMarkers]
  );
  const featuredCases = caseMarkers.slice(0, 4);
  const featuredAlerts = alertMarkers.slice(0, 3);
  const jumpTo = (nextFocus: MapFocus) => {
    setFocus(nextFocus);
    setHasInteracted(true);
  };

  return (
    <div className="interactive-map-shell">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={2}
        minZoom={2}
        maxZoom={7}
        scrollWheelZoom={false}
        zoomControl
        className="interactive-map"
        worldCopyJump
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <FitMap points={fitPoints} />
        <FocusMap focus={focus} lookup={focusLookup} />
        <InteractionTracker onInteract={() => setHasInteracted(true)} />

        <LayerGroup>
              {caseMarkers.map(({ record, position }) => (
                <CircleMarker
                  key={record.id}
                  center={position}
                  radius={12}
                  pathOptions={{ color: "#fde68a", fillColor: "#f59e0b", fillOpacity: 0.96, opacity: 1, weight: 3 }}
                >
                  <Tooltip direction="top" offset={[0, -10]} opacity={0.95}>
                    Click for {record.jurisdiction} source summary
                  </Tooltip>
                  <Popup className="dark-map-popup" maxWidth={360} minWidth={260} closeButton>
                    <PopupCard
                      title={record.jurisdiction}
                      label="Reported case summary"
                      sourceIds={record.sourceIds}
                      sourcesById={sourcesById}
                      primaryHref={record.slug ? `/where/${record.slug}` : "/where/united-states"}
                      primaryLabel={`Open ${record.jurisdiction} map page`}
                    >
                      <p>{record.reportLabel}</p>
                      <p>{record.summary}</p>
                      <p className="popup-limit">Precision: {record.geographyPrecision}</p>
                    </PopupCard>
                  </Popup>
                </CircleMarker>
              ))}
        </LayerGroup>

        <LayerGroup>
              {alertMarkers.map(({ alert, position }) => (
                <LayerGroup key={alert.id}>
                  <CircleMarker
                    center={position}
                    radius={24}
                    interactive={false}
                    pathOptions={{
                      className: "alert-pulse-ring",
                      color: "#fb7185",
                      fillColor: "#ef4444",
                      fillOpacity: 0.18,
                      opacity: 0.82,
                      weight: 2
                    }}
                  />
                  <CircleMarker
                    center={position}
                    radius={12}
                    pathOptions={{
                      className: "alert-glow-marker",
                      color: "#fecaca",
                      fillColor: "#ef4444",
                      fillOpacity: 0.96,
                      opacity: 1,
                      weight: 3
                    }}
                  >
                    <Tooltip direction="top" offset={[0, -10]} opacity={0.95}>
                      Click for official alert details
                    </Tooltip>
                    <Popup className="dark-map-popup" maxWidth={380} minWidth={280} closeButton>
                      <PopupCard
                        title={alert.title}
                        label={`${alert.agency} · ${alert.date}`}
                        sourceIds={alert.sourceIds}
                        sourcesById={sourcesById}
                        primaryHref="/outbreaks"
                        primaryLabel="Open official alerts"
                      >
                        <p>{alert.summary}</p>
                        <p className="popup-limit">{alert.riskLanguage}</p>
                      </PopupCard>
                    </Popup>
                  </CircleMarker>
                </LayerGroup>
              ))}
        </LayerGroup>

        <LayerGroup>
              {reservoirMarkers.map(({ reservoir, region }) => (
                <CircleMarker
                  key={reservoir.id}
                  center={region.center}
                  radius={32}
                  pathOptions={{ color: region.color, fillColor: region.color, fillOpacity: 0.28, opacity: 0.95, weight: 3 }}
                >
                  <Tooltip direction="top" offset={[0, -18]} opacity={0.95}>
                    Click for {reservoir.commonName} ecology note
                  </Tooltip>
                  <Popup className="dark-map-popup" maxWidth={380} minWidth={280} closeButton>
                    <PopupCard
                      title={reservoir.commonName}
                      label={reservoir.scientificName}
                      sourceIds={reservoir.sourceIds}
                      sourcesById={sourcesById}
                      primaryHref="/deer-mouse-hantavirus-map"
                      primaryLabel="Read reservoir map guide"
                    >
                      <p>{reservoir.summary}</p>
                      <p className="popup-limit">{reservoir.limitations[0]}</p>
                    </PopupCard>
                  </Popup>
                </CircleMarker>
              ))}
        </LayerGroup>
      </MapContainer>
      <details className="map-command-panel" aria-label="Map shortcuts and guidance">
        <summary className="map-command-summary">
          <span>
            <span className="map-command-eyebrow">Explore layers</span>
            <span className="map-command-title">Jump to marker</span>
          </span>
          <span className="map-command-count">{featuredAlerts.length + featuredCases.length + 1}</span>
        </summary>
        <div className="map-command-actions" aria-label="Featured map markers">
          {featuredAlerts.map(({ alert }) => (
            <button key={alert.id} type="button" className="map-jump map-jump-alert" onClick={() => jumpTo({ type: "alert", id: alert.id })}>
              {alert.geography.split(" /")[0]}
            </button>
          ))}
          {featuredCases.map(({ record }) => (
            <button key={record.id} type="button" className="map-jump map-jump-case" onClick={() => jumpTo({ type: "case", id: record.id })}>
              {record.jurisdiction}
            </button>
          ))}
          <button type="button" className="map-jump map-jump-reservoir" onClick={() => jumpTo({ type: "reservoir", id: "deer-mouse-sin-nombre" })}>
            Deer mouse ecology
          </button>
        </div>
      </details>
      {!hasInteracted && (
        <div className="map-tap-hint" role="status">
          Tap a marker, use the jump buttons, or pinch/drag the map. Every popup includes source links and limits.
        </div>
      )}
      <p className="interactive-map-note">
        Free Leaflet/CARTO dark map MVP. Markers are reviewed source summaries, not live case locations or exact local risk.
      </p>
    </div>
  );
}

function PopupCard({
  title,
  label,
  sourceIds,
  sourcesById,
  primaryHref,
  primaryLabel,
  children
}: {
  title: string;
  label: string;
  sourceIds: string[];
  sourcesById: Record<string, SourceRecord>;
  primaryHref: string;
  primaryLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="interactive-popup">
      <p className="popup-label">{label}</p>
      <strong>{title}</strong>
      <div className="popup-body">{children}</div>
      <div className="popup-next-actions">
        <a href={primaryHref}>{primaryLabel}</a>
        <a href="/hantavirus-tracker">Read tracker guide</a>
        <a href="/sources-methodology">How to read sources</a>
      </div>
      <div className="popup-sources">
        {sourceIds.slice(0, 3).map((sourceId) => {
          const source = sourcesById[sourceId];

          if (!source) return null;

          return (
            <a key={source.id} href={source.url} target="_blank" rel="noreferrer">
              {source.publisher}
            </a>
          );
        })}
      </div>
    </div>
  );
}
