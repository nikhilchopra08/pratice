"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center  overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-5xl text-3xl lg:text-3xl font-bold text-center text-white relative z-20">
        Software Development Cell
      </h1>
      <p className="text-white mt-10">presents</p>

      <svg className="w-auto">
  <text x="18" y="30" className=" text-center stroke-2 text-4xl stroke-slate-500 fill-transparent font-bold">Coming Soon!</text>
</svg>

    </div>
  );
}
