import { Fragment } from "react";
import { Sequence } from "remotion";
import { useCurrentFrame, AbsoluteFill } from "remotion";
import Tile from "../components/Tile.component";

const tilesArray = [
  {
    id: "first",
    type: "stack",
    text: "first",
    timing: {
      type: "fixed",
      start: 0,
      end: 50,
    },
  },
  {
    id: "second",
    type: "stack",
    text: "second",
    timing: {
      type: "fixed",
      start: 30,
      end: 70,
    },
  },
  {
    id: "third",
    type: "stack",
    text: "third",
    timing: {
      type: "fixed",
      start: 60,
      end: 100,
    },
  },
];

export const StackAnimation = () => {
  const frame = useCurrentFrame();

  const titleStyle = {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 100,
    color: "white",
  };

  return (
    <Fragment>
      {/* Figure out how to change the position of a tile based on the surrounding tiles, and whether they are still appearing or */}
      {tilesArray.map((tile, index, tilesArray) => {
        return (
          <Sequence
            from={tile.timing.start}
            durationInFrames={tile.timing.end - tile.timing.start}
            key={index}
          >
            <AbsoluteFill style={titleStyle}>
              <Tile content={tile.text} position={index}></Tile>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </Fragment>
  );
};
