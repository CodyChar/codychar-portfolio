"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { FaceTracker } from "./FaceTracker";

export function useTracking() {
  const tracker = useRef<FaceTracker | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [status, setStatus] = useState("idle");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    tracker.current = new FaceTracker();
    return () => {
      tracker.current?.dispose();
    };
  }, []);

  const start = useCallback(async () => {
    if (!tracker.current || !videoRef.current) return;
    try {
      setStatus("starting...");
      await tracker.current.start(videoRef.current);
      setStarted(true);
      setStatus("tracking");
    } catch (e) {
      setStatus("error: " + (e as Error).message);
    }
  }, []);

  const recenter = useCallback((targetDepth: number) => {
    tracker.current?.recenter(targetDepth);
  }, []);

  return { tracker, videoRef, status, started, start, recenter, setStatus };
}
