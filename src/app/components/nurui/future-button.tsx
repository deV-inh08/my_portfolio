import type React from "react";
// import { Frame } from "@/app/components/nurui/future-frame";


interface PathData {
  show: boolean;
  style: {
    strokeWidth: string;
    stroke: string;
    fill: string;
  };
  path: (string | number)[][];
}

interface FrameProps {
  paths: PathData[];
}

// Simple Frame component
const Frame: React.FC<FrameProps> = ({ paths }) => {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 40">
      {paths.map((pathData: PathData, index: number) => {
        if (!pathData.show) return null;

        const pathString: string = pathData.path
          .map(([command, ...coords]) => `${command}${coords.join(',')}`)
          .join('');

        return (
          <path
            key={index}
            d={pathString}
            style={pathData.style}
            fill={pathData.style.fill}
            stroke={pathData.style.stroke}
            strokeWidth={pathData.style.strokeWidth}
          />
        );
      })}
    </svg>
  );
};

interface ButtonFrameProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function ButtonFrame({ children, ...props }: ButtonFrameProps) {
  return (
    <button
      {...props}
      className="group font-black mb-2 relative px-8 py-1 cursor-pointer transition-all outline-none text-white hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]"
    >
      <div className="absolute inset-0 -mb-2">
        <Frame
          paths={[
            {
              show: true,
              style: {
                strokeWidth: "1",
                stroke: "#eab308", // yellow-500
                fill: "rgba(234, 179, 8, 0.22)" // yellow-500/22
              },
              path: [
                ["M", "17", "0"],
                ["L", "180", "0"],
                ["L", "200", "9.5"],
                ["L", "182", "34"],
                ["L", "4", "34"],
                ["L", "0", "25"],
                ["L", "17", "0"]
              ]
            },
            {
              show: true,
              style: {
                strokeWidth: "1",
                stroke: "#eab308", // yellow-500
                fill: "rgba(234, 179, 8, 0.1)" // yellow-500/10
              },
              path: [
                ["M", "9", "34"],
                ["L", "178", "34"],
                ["L", "175", "40"],
                ["L", "12", "40"],
                ["L", "9", "34"]
              ]
            }
          ]}
        />
      </div>
      <span className="relative flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}


export { ButtonFrame };
