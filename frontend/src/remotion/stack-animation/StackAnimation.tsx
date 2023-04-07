import { Sequence, spring, useVideoConfig } from "remotion";
import { useCurrentFrame, AbsoluteFill } from "remotion";
import Tile from "../../components/Tile.component";
import { CalculatedObj } from "../../models/interfaces";
import { Fragment } from "react";
import { Animating } from "../Animating";

export const StackAnimation: React.FC<{ array: CalculatedObj[] }> = ({
  array,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
            // This only works for the beginning of the animation as a whole, not for every sequence - find a way to apply to each sequence
          >
            <AbsoluteFill style={centerElements}>
              {/* <Animating index={index}> */}
              <Tile content={tile.text} index={index} position="y"></Tile>
              {/* </Animating> */}
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </Fragment>
  );
};
