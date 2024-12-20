import React, { useRef, useEffect, ReactNode } from "react";
import "@/utils/gradientBackground.css";
import { cn } from "@/utils/classMerge";

interface GradientBackgroundProps {
  children: ReactNode;
  className?: string
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, className }) => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gradientRef.current) return;

      const { left, top } = gradientRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      gradientRef.current.style.background = `
        radial-gradient(circle at ${x}px ${y}px, 
        #232E30, #0E161B, #162022)`;
    };

    const gradientElement = gradientRef.current;
    gradientElement?.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => {
      gradientElement?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={cn(`radial-gradient-container ${className}`)} ref={gradientRef}>
      {children}
    </div>
  );
};

export default GradientBackground;
