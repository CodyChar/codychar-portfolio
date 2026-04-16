"use client";

import dynamic from "next/dynamic";

const BonsaiScene = dynamic(
  () => import("@/components/bonsai/BonsaiScene"),
  { ssr: false }
);

export default function BonsaiPage() {
  return (
    <div className="fixed inset-0 bg-black">
      <BonsaiScene className="w-full h-full" />
    </div>
  );
}
