"use client";
import React, { JSX, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        // widen the “border gap” from 1px → 2px so the runner is visible
        "relative h-12 w-40 overflow-hidden bg-transparent p-[2px] text-lg",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      {/* runner layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              // bigger, higher-opacity glow + blend mode that works on light bg
              // tailwind v3: theme() is supported in arbitrary values
              "h-24 w-24 opacity-100 mix-blend-multiply dark:mix-blend-screen",
              "bg-[radial-gradient(circle,theme(colors.rose.500)_40%,transparent_62%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* inner panel (defaults for light, overridden by your className) */}
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center",
          "border border-neutral-300 bg-white text-black",
          "dark:border-slate-800 dark:bg-slate-900 dark:text-white",
          "text-sm antialiased backdrop-blur-xl",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (!length) return;
    const pxPerMs = length / duration;
    progress.set((time * pxPerMs) % length);
  });

  const x = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).x
  );
  const y = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).y
  );
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
          willChange: "transform, filter",
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
