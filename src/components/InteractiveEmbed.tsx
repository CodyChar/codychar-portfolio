"use client";

import { useState, useRef, useCallback } from "react";

interface InteractiveEmbedProps {
  src: string;
  title: string;
  description?: string;
  aspectRatio?: string;
  allowFullscreen?: boolean;
  autoload?: boolean;
}

export default function InteractiveEmbed({
  src,
  title,
  description,
  aspectRatio = "16/9",
  allowFullscreen = true,
  autoload = false,
}: InteractiveEmbedProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLaunched, setIsLaunched] = useState(autoload);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  return (
    <div ref={containerRef} className="group relative">
      <div
        className={`relative overflow-hidden rounded-xl border border-border bg-black ${
          isFullscreen ? "fixed inset-0 z-50 rounded-none border-none" : ""
        }`}
        style={isFullscreen ? undefined : { aspectRatio }}
      >
        {!isLaunched ? (
          <button
            onClick={() => setIsLaunched(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-black/60 to-black/80 transition-colors hover:from-black/50 hover:to-black/70"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-105">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-1"
              >
                <path d="M8 5v14l11-7L8 5z" fill="white" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="mt-1 text-xs text-white/60">
                Click to launch interactive scene
              </p>
            </div>
          </button>
        ) : (
          <>
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
                  <p className="text-xs text-white/60">Loading scene...</p>
                </div>
              </div>
            )}
            <iframe
              src={src}
              title={title}
              className={`h-full w-full border-0 ${
                isLoaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
              allow="camera; microphone; fullscreen; accelerometer; gyroscope"
              onLoad={() => setIsLoaded(true)}
            />
          </>
        )}

        {isLaunched && isLoaded && (
          <div className="absolute top-3 right-3 flex gap-2">
            {allowFullscreen && (
              <button
                onClick={toggleFullscreen}
                className="rounded-lg bg-black/60 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white"
              >
                {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </button>
            )}
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black/60 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white"
            >
              Open in New Tab
            </a>
          </div>
        )}
      </div>

      {description && !isFullscreen && (
        <p className="mt-2 text-sm text-muted">{description}</p>
      )}
    </div>
  );
}
