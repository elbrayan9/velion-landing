"use client";

import Script from "next/script";

export default function SplineHero() {
  return (
    <div className="w-full h-full relative">
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      {/* @ts-ignore */}
      <spline-viewer
        url="https://prod.spline.design/jMyXdic2sH09uitX/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
