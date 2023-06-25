"use client";

import { Html, useProgress } from "@react-three/drei";

export default function Loading() {
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 16,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}
