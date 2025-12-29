"use client";

import { useEffect, useRef } from "react";

export default function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadUnicornScript = () => {
      // @ts-ignore
      if (!window.UnicornStudio) {
        // @ts-ignore
        window.UnicornStudio = { isInitialized: false };
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        script.onload = () => {
          // @ts-ignore
          if (!window.UnicornStudio.isInitialized) {
            // @ts-ignore
            window.UnicornStudio.init();
            // @ts-ignore
            window.UnicornStudio.isInitialized = true;
          }
        };
        (document.head || document.body).appendChild(script);
      } else {
        // If script is already loaded, we need to re-initialize because the DOM node was likely replaced
        // Reset the flag to force init to run again
        // @ts-ignore
        window.UnicornStudio.isInitialized = false;

        // Small timeout to ensure DOM is ready
        setTimeout(() => {
          // @ts-ignore
          window.UnicornStudio.init();
          // @ts-ignore
          window.UnicornStudio.isInitialized = true;
        }, 50);
      }
    };

    loadUnicornScript();

    return () => {
      // Cleanup on unmount
      // @ts-ignore
      if (window.UnicornStudio) {
        // @ts-ignore
        window.UnicornStudio.isInitialized = false;
      }
      // Manually remove canvas if it was appended to the container
      if (containerRef.current) {
        const canvas = containerRef.current.querySelector("canvas");
        if (canvas) {
          canvas.remove();
        }
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#030303]">
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        data-us-project="FixNvEwvWwbu3QX9qC3F"
        style={{ opacity: 1 }}
      ></div>
    </div>
  );
}
