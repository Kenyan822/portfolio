import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hoverEffect = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border border-white/10
        bg-white/[0.07] backdrop-blur-xl shadow-lg
        transition-all duration-300
        ${hoverEffect ? "hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1" : ""}
        ${className}
      `}
      {...props}
    >
      {/* Glossy reflection effect */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      {children}
    </div>
  );
}
