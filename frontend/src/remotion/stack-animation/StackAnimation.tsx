import { Sequence, spring, useVideoConfig } from "remotion";
import { useCurrentFrame, AbsoluteFill } from "remotion";
import Tile from "../../components/Tile.component";
import { CalculatedObj } from "../../models/interfaces";
import { Fragment } from "react";

// const tilesArray: CalculatedObj[] = [
//   {
//     id: "first",
//     type: "stack",
//     text: "first",
//     timing: {
//       type: "fixed",
//       start: 0,
//       end: 15,
//     },
//   },
//   {
//     id: "second",
//     type: "stack",
//     text: "second",
//     timing: {
//       type: "fixed",
//       start: 1,
//       end: 10,
//     },
//   },
//   {
//     id: "third",
//     type: "stack",
//     text: "third",
//     timing: {
//       type: "fixed",
//       start: 2,
//       end: 5,
//     },
//   },
// ];

export const StackAnimation: React.FC<{ array: CalculatedObj[] }> = ({
  array,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const centerElements = {
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Fragment>
      {array.map((tile, index) => {
        return (
          <Sequence
            from={tile.timing.start * 30}
            durationInFrames={tile.timing.end * 30 - tile.timing.start * 30}
            key={index}
            style={{ transform: `scale(${scale})` }} // This only works for the beginning of the animation as a whole, not for every sequence - find a way to apply to each sequence
          >
            <AbsoluteFill style={centerElements}>
              <Tile content={tile.text} index={index} position="y"></Tile>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </Fragment>
  );
};
