import { interpolate, useCurrentFrame } from "remotion";
import { AbsoluteFill } from "remotion";
import React from "react";

export const Animating: React.FC<{
  children: React.ReactNode;
  index: number;
}> = ({ children, index }) => {
  const frame = useCurrentFrame();

  console.log("CHILDREN", children);

  return (
    <AbsoluteFill
      style={{
        scale: String(
          interpolate(frame, [10, 40], [0.9, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        ),
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
