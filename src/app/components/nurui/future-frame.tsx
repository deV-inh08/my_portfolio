"use client";

import type React from "react";

import { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
// import type { Paths } from "@/types/frame"

type PathCommand = ["M" | "L", string, string];

interface PathProps {
  show: boolean;
  style: {
    strokeWidth: string;
    stroke: string;
    fill: string;
  };
  path: PathCommand[];
}

type Paths = PathProps[];

function setupSvgRenderer({
  el,
  paths,
  enableBackdropBlur,
}: {
  el: SVGSVGElement;
  paths: Paths;
  enableBackdropBlur: boolean | undefined;
}) {
  // Clear previous content
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }

  // Optionally add backdrop blur filter
  if (enableBackdropBlur) {
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const filter = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "filter",
    );
    filter.setAttribute("id", "backdrop-blur");
    filter.innerHTML = `
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    `;
    defs.appendChild(filter);
    el.appendChild(defs);
  }

  // Convert path commands to SVG path string
  const convertPathToString = (pathCommands: [string, string, string][]) => {
    return (
      pathCommands
        .map(([command, x, y]) => {
          // Replace percentage-based coordinates with actual values
          const processCoordinate = (coord: string, isX: boolean) => {
            if (coord.includes("%")) {
              // For demo purposes, we'll use viewport-relative values
              return coord
                .replace("100%", isX ? "200" : "40")
                .replace("0%", "0");
            }
            return coord;
          };

          const processedX = processCoordinate(x, true);
          const processedY = processCoordinate(y, false);

          return `${command}${processedX},${processedY}`;
        })
        .join(" ") + " Z"
    );
  };

  // Render each path
  paths.forEach((pathProps) => {
    if (!pathProps.show) return;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Set the path data
    const pathString = convertPathToString(pathProps.path);
    path.setAttribute("d", pathString);

    // Apply styles
    Object.entries(pathProps.style).forEach(([key, value]) => {
      if (key === "strokeWidth") {
        path.setAttribute("stroke-width", value);
      } else {
        path.setAttribute(key, value);
      }
    });

    if (enableBackdropBlur) {
      path.setAttribute("filter", "url(#backdrop-blur)");
    }

    el.appendChild(path);
  });

  return {
    destroy() {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    },
  };
}

function Frame({
  className,
  paths,
  enableBackdropBlur,
  ...props
}: {
  paths: Paths;
  enableBackdropBlur?: boolean;
} & React.ComponentProps<"svg">) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current && svgRef.current.parentElement) {
      const instance = setupSvgRenderer({
        el: svgRef.current,
        paths,
        enableBackdropBlur,
      });

      return () => instance.destroy();
    }
  }, [paths, enableBackdropBlur]);

  return (
    <svg
      {...props}
      className={twMerge(["absolute inset-0 size-full", className])}
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
    />
  );
}

export { Frame };
