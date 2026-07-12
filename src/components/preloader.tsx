"use client";

import { useEffect, useState } from "react";

// Replica of the original site's Webflow preloader: full-screen brand-purple
// overlay with small "Loading ..." text that fades out shortly after load.
export function Preloader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 900);
    const removeTimer = setTimeout(() => setGone(true), 1500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-999 flex items-center justify-center bg-primary transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <p className="text-sm text-primary-foreground">Loading ...</p>
    </div>
  );
}
