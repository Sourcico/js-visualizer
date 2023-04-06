import { Fragment, useEffect, useState } from "react";
import { Sequence } from "remotion";
import { useCurrentFrame, AbsoluteFill } from "remotion";
import Tile from "../../components/Tile.component";
import { CalculatedObj } from "../../models/interfaces";
import { StackAnimation } from "../stack-animation/StackAnimation";
import { TaskQueueAnimation } from "../queue-animation/TaskQueueAnimation";

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

export const Video: React.FC = () => {
  const [arrToIterate, setArrToIterate] = useState(queueArray);
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
    setArrToIterate(arrayToIterate(queueArray));
  }, [frame]);

  const centerElements = {
    justifyContent: "center",
  };

  return (
    <Fragment>
      <StackAnimation array={tilesArray}></StackAnimation>
      <TaskQueueAnimation array={tilesArray}></TaskQueueAnimation>
    </Fragment>
  );
};
