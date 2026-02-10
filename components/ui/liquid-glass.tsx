"use client";

import React from "react";
import { cn } from "../../utils";

// Types
interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// Glass Effect Wrapper Component
const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_self",
  onClick,
  type = "button",
  disabled
}) => {
  const glassStyle = {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div className="relative flex w-full h-full items-center justify-center">
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit pointer-events-none"
        style={{
          backdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-inherit pointer-events-none"
        style={{ background: "rgba(255, 255, 255, 0.15)" }}
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit overflow-hidden pointer-events-none"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.3)",
        }}
      />

      {/* Content */}
      <div className="relative z-30 flex items-center justify-center gap-2">{children}</div>
    </div>
  );

  const containerClasses = cn(
    "relative font-semibold overflow-hidden cursor-pointer transition-all duration-700 active:scale-95",
    className
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel="noopener noreferrer" 
        className={containerClasses}
        style={glassStyle}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={containerClasses} 
      style={glassStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

// Button Component
export const GlassButton: React.FC<GlassEffectProps> = (props) => (
  <GlassEffect
    {...props}
    className={cn(
      "rounded-xl px-6 py-3 hover:px-7 hover:py-3.5 hover:rounded-2xl overflow-hidden",
      props.className
    )}
  >
    {props.children}
  </GlassEffect>
);

// SVG Filter Component
export const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }}>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="20"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);