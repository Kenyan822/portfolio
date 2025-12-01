import React from "react";

export function AmbientGlow() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Top Left - Blue */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px] animate-pulse-slow" />
      
      {/* Bottom Right - Indigo/Purple */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[100px] animate-pulse-slow delay-1000" />
      
      {/* Center - Cyan/Emerald mix for balance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-cyan-500/15 blur-[120px] animate-pulse-slower delay-700" />
      
      {/* Optional: Subtle accent in top right */}
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow delay-2000" />
    </div>
  );
}
