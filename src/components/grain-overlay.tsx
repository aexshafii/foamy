"use client";

import { useEffect, useState } from "react";

// Replica of the original site's grained.js overlay
// (patternWidth/Height 100, grainOpacity 0.1, grainDensity 1, animated).
export function GrainOverlay() {
  const [pattern, setPattern] = useState<string | null>(null);

  useEffect(() => {
    const size = 100;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const image = ctx.createImageData(size, size);
    for (let i = 0; i < image.data.length; i += 4) {
      const value = Math.floor(Math.random() * 256);
      image.data[i] = value;
      image.data[i + 1] = value;
      image.data[i + 2] = value;
      image.data[i + 3] = 26; // grainOpacity 0.1
    }
    ctx.putImageData(image, 0, 0);
    setPattern(canvas.toDataURL("image/png"));
  }, []);

  if (!pattern) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed -inset-[100%] z-40 animate-grain"
      style={{ backgroundImage: `url(${pattern})` }}
    />
  );
}
