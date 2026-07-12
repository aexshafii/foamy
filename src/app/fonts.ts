import localFont from "next/font/local";

export const neueMachina = localFont({
  src: [
    { path: "../fonts/PPNeueMachina-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/PPNeueMachina-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/PPNeueMachina-Ultrabold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-neue-machina",
  display: "swap",
});

export const wordmark = localFont({
  src: "../fonts/FontsFree-Net-cor1.ttf",
  variable: "--font-wordmark",
  display: "swap",
});
