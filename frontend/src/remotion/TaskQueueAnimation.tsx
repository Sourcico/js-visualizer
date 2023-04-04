import { Fragment, useEffect, useState } from "react";
import { Sequence } from "remotion";
import { useCurrentFrame, AbsoluteFill } from "remotion";
import Tile from "../components/Tile.component";
import { CalculatedObj } from "../models/interfaces";

const tilesArray: CalculatedObj[] = [
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
  const [arrToIterate, setArrToIterate] = useState(tilesArray);
  const frame = useCurrentFrame();

  const arrayToIterate = (arr: CalculatedObj[]): CalculatedObj[] => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element.timing.end * 30 <= frame) {
        arr.shift();
        return arr;
      }
    }
    return arr;
  };

  useEffect(() => {
    setArrToIterate(arrayToIterate(tilesArray));
  }, [frame]);

  const centerElements = {
    justifyContent: "center",
  };

  return (
    <Fragment>
      {arrToIterate.map((tile, index) => {
        return (
          <Sequence
            from={tile.timing.start * 30}
            durationInFrames={tile.timing.end * 30 - tile.timing.start * 30}
            key={index}
          >
            <AbsoluteFill style={centerElements}>
              <Tile content={tile.text} index={index} position="x"></Tile>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </Fragment>
  );
};
