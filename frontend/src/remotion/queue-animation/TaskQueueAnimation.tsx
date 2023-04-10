import { Fragment, useEffect, useState } from "react";
import { Sequence, spring, useVideoConfig } from "remotion";
import { useCurrentFrame, AbsoluteFill } from "remotion";
import Tile from "../../components/Tile.component";
import { CalculatedObj } from "../../models/interfaces";
import { StackAnimation } from "../stack-animation/StackAnimation";
import { Animating } from "../Animating";

export const TaskQueueAnimation: React.FC<{ array: CalculatedObj[] }> = ({
  array,
}) => {
  const [arrToIterate, setArrToIterate] = useState(array);
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const arrayToIterate = (arr: CalculatedObj[]): CalculatedObj[] => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element.timing.end * 30 <= frame) {
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
            <Tile
              content={tile.text}
              index={index}
              position="x"
              moveToPrev={tile.timing.moveToPrev}
            ></Tile>
            {/* </Animating> */}
            {/* <AbsoluteFill style={centerElements}> */}

            {/* </AbsoluteFill> */}
          </Sequence>
        );
      })}
    </Fragment>
  );
};
