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
      end: 5,
    },
  },
  {
    id: "second",
    type: "stack",
    text: "second",
    timing: {
      type: "fixed",
      start: 1,
      end: 10,
    },
  },
  {
    id: "third",
    type: "stack",
    text: "third",
    timing: {
      type: "fixed",
      start: 2,
      end: 15,
    },
  },
];

export const TaskQueueAnimation = () => {
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
            from={tile.timing.start * 30}
            durationInFrames={tile.timing.end * 30 - tile.timing.start * 30}
            key={index}
          >
            <AbsoluteFill style={titleStyle}>
              <Tile
                content={tile.text}
                position={tile.timing.start * 30}
              ></Tile>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </Fragment>
  );
};
