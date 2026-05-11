"use client";

import { useEffect } from "react";

const RELOAD_FLAG = "hm-chunk-reload-attempted";
const CHUNK_ERROR_PATTERNS = [
  "ChunkLoadError",
  "Loading chunk",
  "loading chunk",
  "failed to fetch dynamically imported module",
  "Importing a module script failed",
  "unexpected token '<'",
  "Unexpected token '<'"
];

function isRecoverableChunkError(value: unknown) {
  const message = value instanceof Error ? `${value.name} ${value.message}` : String(value ?? "");

  return CHUNK_ERROR_PATTERNS.some((pattern) => message.includes(pattern));
}

function reloadOnce() {
  try {
    if (sessionStorage.getItem(RELOAD_FLAG) === "1") return;
    sessionStorage.setItem(RELOAD_FLAG, "1");
  } catch {
    // If storage is blocked, prefer one reload over leaving a broken page.
  }

  window.location.reload();
}

export function ChunkReloadGuard() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (isRecoverableChunkError(event.error) || isRecoverableChunkError(event.message)) {
        reloadOnce();
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (isRecoverableChunkError(event.reason)) {
        reloadOnce();
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}
