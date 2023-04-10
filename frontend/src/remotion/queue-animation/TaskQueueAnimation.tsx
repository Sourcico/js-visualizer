import { Fragment, useEffect, useState } from "react";
import { Sequence, spring, useVideoConfig } from "remotion";
import { useCurrentFrame, AbsoluteFill } from "remotion";
import Tile from "../../components/Tile.component";
import { CalculatedObj } from "../../models/interfaces";
import { StackAnimation } from "../stack-animation/StackAnimation";
import { Animating } from "../Animating";

const tilesArray: CalculatedObj[] = [
  {
    id: "first",
    type: "stack",
    text: "first",
    timing: {
      type: "fixed",
      start: 0,
      end: 15,
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
      end: 5,
    },
  },
];

const queueArray = [
  {
    id: "first",
    type: "queue",
    text: "first",
    timing: {
      type: "fixed",
      start: 0,
      end: 5,
    },
  },
  {
    id: "second",
    type: "queue",
    text: "second",
    timing: {
      type: "fixed",
      start: 1,
      end: 10,
    },
  },
  {
    id: "third",
    type: "queue",
    text: "third",
    timing: {
      type: "fixed",
      start: 2,
      end: 15,
    },
  },
];

export const TaskQueueAnimation: React.FC<{ array: CalculatedObj[] }> = ({
  array,
}) => {
  const [arrToIterate, setArrToIterate] = useState(array);
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const arrayToIterate = (arr: CalculatedObj[]): CalculatedObj[] => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element.timing.end * 30 <= frame + 30) {
        const elementToRemove = arr.shift()!;
        arr.push(elementToRemove);
        return arr;
      }
    }
    return arr;
  };

  useEffect(() => {
    setArrToIterate(arrayToIterate(array));
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
            durationInFrames={
              tile.timing.end * 30 - tile.timing.start * 30 - 30
            }
            key={index}
          >
            {/* <Animating index={index}> */}
            <Tile content={tile.text} index={index} position="x"></Tile>
            {/* </Animating> */}
            {/* <AbsoluteFill style={centerElements}> */}

            {/* </AbsoluteFill> */}
          </Sequence>
        );
      })}
    </Fragment>
  );
};
