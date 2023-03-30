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
      start: 20,
      end: 40,
    },
  },
  {
    id: "third",
    type: "stack",
    text: "third",
    timing: {
      type: "fixed",
      start: 40,
      end: 30,
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
        const getTilePosition = () => {
          if (index === 0) {
            return 0;
          }
          if (tilesArray[index - 1].timing.end < frame) {
            return index - 1;
          }
          return index;
        };
        return (
          <Sequence
            from={tile.timing.start}
            durationInFrames={tile.timing.end + tile.timing.start}
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
