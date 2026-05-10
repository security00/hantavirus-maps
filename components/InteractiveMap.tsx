"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { CircleMarker, LayerGroup, LayersControl, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";

import type { CaseRecord, OfficialAlert, ReservoirRecord, SourceRecord } from "@/lib/data";

type InteractiveMapProps = {
  casePoints: CaseRecord[];
  alertPoints: OfficialAlert[];
  reservoirs: ReservoirRecord[];
  sourcesById: Record<string, SourceRecord>;
};

type LatLng = [number, number];

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

function FitMap({ points }: { points: LatLng[] }) {
  const map = useMap();

  if (points.length > 1) {
    const bounds = L.latLngBounds(points.map(([lat, lng]) => L.latLng(lat, lng)));
    map.fitBounds(bounds.pad(0.28), { animate: false });
  }

  return null;
}

export function InteractiveMap({ casePoints, alertPoints, reservoirs, sourcesById }: InteractiveMapProps) {
  const caseMarkers = casePoints
    .filter((record): record is CaseRecord & { mapPoint: NonNullable<CaseRecord["mapPoint"]> } => Boolean(record.mapPoint))
    .map((record) => ({ record, position: svgPointToLatLng(record.mapPoint) }));
  const alertMarkers = alertPoints
    .filter((alert): alert is OfficialAlert & { mapPoint: NonNullable<OfficialAlert["mapPoint"]> } => Boolean(alert.mapPoint))
    .map((alert) => ({ alert, position: svgPointToLatLng(alert.mapPoint) }));
  const reservoirMarkers = reservoirs.map((reservoir) => ({
    reservoir,
    region: reservoirRegions[reservoir.id] ?? { center: DEFAULT_CENTER, radiusMeters: 500000, color: "#34d399" }
  }));
  const fitPoints = [...caseMarkers.map((marker) => marker.position), ...alertMarkers.map((marker) => marker.position)];

  return (
    <div className="interactive-map-shell">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={2}
        minZoom={2}
        maxZoom={7}
        scrollWheelZoom={false}
        className="interactive-map"
        worldCopyJump
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitMap points={fitPoints} />

        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Reported case summaries">
            <LayerGroup>
              {caseMarkers.map(({ record, position }) => (
                <CircleMarker
                  key={record.id}
                  center={position}
                  radius={8}
                  pathOptions={{ color: "#fbbf24", fillColor: "#fbbf24", fillOpacity: 0.88, weight: 2 }}
                >
                  <Popup>
                    <PopupCard title={record.jurisdiction} label="Reported case summary" sourceIds={record.sourceIds} sourcesById={sourcesById}>
                      <p>{record.reportLabel}</p>
                      <p>{record.summary}</p>
                      <p className="popup-limit">Precision: {record.geographyPrecision}</p>
                    </PopupCard>
                  </Popup>
                </CircleMarker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Official public health alerts">
            <LayerGroup>
              {alertMarkers.map(({ alert, position }) => (
                <CircleMarker
                  key={alert.id}
                  center={position}
                  radius={8}
                  pathOptions={{ color: "#f87171", fillColor: "#f87171", fillOpacity: 0.9, weight: 2 }}
                >
                  <Popup>
                    <PopupCard title={alert.title} label={`${alert.agency} · ${alert.date}`} sourceIds={alert.sourceIds} sourcesById={sourcesById}>
                      <p>{alert.summary}</p>
                      <p className="popup-limit">{alert.riskLanguage}</p>
                    </PopupCard>
                  </Popup>
                </CircleMarker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Rodent reservoir ecology">
            <LayerGroup>
              {reservoirMarkers.map(({ reservoir, region }) => (
                <CircleMarker
                  key={reservoir.id}
                  center={region.center}
                  radius={24}
                  pathOptions={{ color: region.color, fillColor: region.color, fillOpacity: 0.18, weight: 2 }}
                >
                  <Popup>
                    <PopupCard title={reservoir.commonName} label={reservoir.scientificName} sourceIds={reservoir.sourceIds} sourcesById={sourcesById}>
                      <p>{reservoir.summary}</p>
                      <p className="popup-limit">{reservoir.limitations[0]}</p>
                    </PopupCard>
                  </Popup>
                </CircleMarker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      <p className="interactive-map-note">
        Free OpenStreetMap/Leaflet MVP. Markers are source-linked reviewed snapshots, not live case locations or exact local risk.
      </p>
    </div>
  );
}

function PopupCard({
  title,
  label,
  sourceIds,
  sourcesById,
  children
}: {
  title: string;
  label: string;
  sourceIds: string[];
  sourcesById: Record<string, SourceRecord>;
  children: React.ReactNode;
}) {
  return (
    <div className="interactive-popup">
      <p className="popup-label">{label}</p>
      <strong>{title}</strong>
      <div className="popup-body">{children}</div>
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
