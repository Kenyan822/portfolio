import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}

export function GradientText({
  children,
  className = "",
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component
      className={`
        bg-[linear-gradient(to_right,#ffffff,#e5e7eb,#9ca3af,#ffffff,#9ca3af)]
        bg-[length:200%_auto] bg-clip-text text-transparent
        transition-[background-position] duration-[2000ms] ease-in-out
        bg-left hover:bg-right
        ${className}
      `}
    >
      {children}
    </Component>
  );
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${className}`}>
      <GradientText>{children}</GradientText>
    </h2>
  );
}
