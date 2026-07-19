"use client";

import { useEffect, useState } from "react";

interface ModelViewerProps {
  glbSrc: string;
  usdzSrc?: string;
  alt?: string;
  poster?: string;
}

export default function ModelViewer({
  glbSrc,
  usdzSrc,
  alt = "Mamz Bear",
  poster,
}: ModelViewerProps) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    import("@google/model-viewer")
      .then(() => setReady(true))
      .catch((err) => {
        console.error("model-viewer import failed:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div style={{ color: "red", padding: 20 }}>خطا: {error}</div>;
  }

  if (!ready) {
    return (
      <div style={{ width: "100%", height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <model-viewer
      src={glbSrc}
      ios-src={usdzSrc}
      alt={alt}
      poster={poster}
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-placement="floor"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      shadow-softness="0.8"
      environment-image="neutral"
      exposure="1"
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#f5f5f5",
      }}
    />
  );
}