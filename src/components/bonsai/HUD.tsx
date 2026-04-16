"use client";

import type { SceneParams } from "./constants";

interface HUDProps {
  params: SceneParams;
  onChange: (key: keyof SceneParams, value: number) => void;
  status: string;
  started: boolean;
  onStart: () => void;
  onRecenter: () => void;
  visible: boolean;
  onToggle: () => void;
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-2 text-xs mt-1">
      <span className="w-24 shrink-0 opacity-70">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="flex-1 accent-[#d76b3f]"
      />
      <code className="w-10 text-right text-[#ffb36b] font-mono">{value.toFixed(2)}</code>
    </div>
  );
}

export default function HUD({
  params,
  onChange,
  status,
  started,
  onStart,
  onRecenter,
  visible,
  onToggle,
}: HUDProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="fixed top-3 left-3 z-50 w-10 h-10 rounded-lg flex flex-col justify-center items-center gap-1 cursor-pointer"
        style={{
          background: "rgba(10,14,22,0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          opacity: visible ? 1 : 0.25,
        }}
      >
        <span className="block w-[18px] h-[2px] bg-white rounded-sm" />
        <span className="block w-[18px] h-[2px] bg-white rounded-sm" />
        <span className="block w-[18px] h-[2px] bg-white rounded-sm" />
      </button>

      {visible && (
        <div
          className="fixed top-14 left-3 z-40 rounded-xl text-[13px] leading-relaxed min-w-[260px] max-h-[calc(100vh-80px)] overflow-y-auto"
          style={{
            background: "rgba(10,14,22,0.72)",
            backdropFilter: "blur(18px)",
            padding: "10px 14px",
            color: "#e8eef5",
          }}
        >
          <h1 className="text-sm font-semibold mb-1">Bonsai Fishtank · R3F</h1>
          <div className="flex justify-between">
            <span>Face</span>
            <code className="text-[#ffb36b] font-mono">{status}</code>
          </div>

          <div className="mt-2 flex gap-1">
            {!started && (
              <button onClick={onStart} className="rounded-lg px-3 py-2 text-xs font-medium text-white bg-[#d76b3f] cursor-pointer">
                Enable Camera
              </button>
            )}
            {started && (
              <button onClick={onRecenter} className="rounded-lg px-3 py-2 text-xs font-medium text-white bg-[#3a4352] cursor-pointer">
                Recenter
              </button>
            )}
          </div>

          <h2 className="mt-3 mb-1 text-[11px] font-semibold uppercase tracking-wider opacity-50">Frame</h2>
          <Slider label="Screen W (cm)" value={params.screenWidthCm} min={15} max={80} step={0.5} onChange={(v) => onChange("screenWidthCm", v)} />
          <Slider label="Sit-back (cm)" value={params.sitBackCm} min={20} max={120} step={1} onChange={(v) => onChange("sitBackCm", v)} />
          <Slider label="Scale" value={params.userScale} min={0.2} max={4} step={0.05} onChange={(v) => onChange("userScale", v)} />
          <Slider label="Letterbox" value={params.letterbox} min={0} max={0.35} step={0.005} onChange={(v) => onChange("letterbox", v)} />

          <h2 className="mt-3 mb-1 text-[11px] font-semibold uppercase tracking-wider opacity-50">Scene</h2>
          <Slider label="Scene X" value={params.sceneX} min={-0.5} max={0.5} step={0.01} onChange={(v) => onChange("sceneX", v)} />
          <Slider label="Scene Y" value={params.sceneY} min={-0.5} max={0.5} step={0.01} onChange={(v) => onChange("sceneY", v)} />
          <Slider label="Scene Z" value={params.sceneZ} min={-1} max={1} step={0.01} onChange={(v) => onChange("sceneZ", v)} />
          <Slider label="Scene scale" value={params.sceneScale} min={0.1} max={5} step={0.05} onChange={(v) => onChange("sceneScale", v)} />
          <Slider label="Tree scale" value={params.treeScale} min={0.1} max={5} step={0.05} onChange={(v) => onChange("treeScale", v)} />
          <Slider label="Box depth (cm)" value={params.boxDepthCm} min={5} max={40} step={0.5} onChange={(v) => onChange("boxDepthCm", v)} />

          <h2 className="mt-3 mb-1 text-[11px] font-semibold uppercase tracking-wider opacity-50">Sun</h2>
          <Slider label="Altitude" value={params.sunAltitude} min={0} max={1} step={0.01} onChange={(v) => onChange("sunAltitude", v)} />
          <Slider label="Azimuth" value={params.sunAzimuth} min={0} max={1} step={0.01} onChange={(v) => onChange("sunAzimuth", v)} />
          <Slider label="Luminance" value={params.sunLuminance} min={0} max={1.19} step={0.01} onChange={(v) => onChange("sunLuminance", v)} />

          <h2 className="mt-3 mb-1 text-[11px] font-semibold uppercase tracking-wider opacity-50">Cinematic</h2>
          <Slider label="Bloom" value={params.bloom} min={0} max={2} step={0.01} onChange={(v) => onChange("bloom", v)} />
          <Slider label="DoF strength" value={params.dofStrength} min={0} max={5} step={0.1} onChange={(v) => onChange("dofStrength", v)} />
          <Slider label="Focus dist (m)" value={params.focusDist} min={0.2} max={1.5} step={0.01} onChange={(v) => onChange("focusDist", v)} />
          <Slider label="Grain" value={params.grain} min={0} max={30} step={0.5} onChange={(v) => onChange("grain", v)} />
          <Slider label="Chromatic ab." value={params.chromatic} min={0} max={60} step={1} onChange={(v) => onChange("chromatic", v)} />
          <Slider label="Vignette" value={params.vignette} min={0} max={1} step={0.01} onChange={(v) => onChange("vignette", v)} />
          <Slider label="SSAO" value={params.ssao} min={0} max={3} step={0.05} onChange={(v) => onChange("ssao", v)} />
        </div>
      )}
    </>
  );
}
