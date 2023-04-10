import {
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const Tile: React.FC<{
  content: string;
  index: number;
  position: string;
  moveToPrev?: number[];
}> = ({ content, index, position, moveToPrev }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const rangeBeginning = [0, 30];
  const rangeEnd = [durationInFrames - 30, durationInFrames];

  let inBetween = [];
  let inBetweenAnimationValues = [];

  if (moveToPrev!.length > 0) {
    for (const moveTime of moveToPrev!) {
      inBetween.push((moveTime - 1) * 30, (moveTime - 1) * 30 + 30);
      inBetweenAnimationValues.push(1, 0);
    }
  }

  console.log([...rangeBeginning, ...inBetween, ...rangeEnd]);

  const opacity = interpolate(
    frame,
    inBetween.length > 0
      ? [...rangeBeginning, ...inBetween, ...rangeEnd]
      : [...rangeBeginning, ...rangeEnd],
    inBetween.length > 0
      ? [0, 1, ...inBetweenAnimationValues, 1, 0]
      : [0, 1, 1, 0],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    }
  );
  // const scale = interpolate(
  //   frame,
  //   [...rangeBeginning, ...rangeEnd],
  //   [0.9, 1, 1, 0.9]
  // );

  const tileContainerHeight = 100;
  const tileContainerWidth = 260;
  const tileContainerBottom = tileContainerHeight * index;
  const tileContainerLeft = tileContainerWidth * index;

  let style: React.CSSProperties = {
    opacity,
    width: tileContainerWidth,
    height: tileContainerHeight,
    position: "fixed",
    // transform: `scale(${scale})`,
  };

  position === "y"
    ? (style = { ...style, bottom: tileContainerBottom })
    : (style = { ...style, left: tileContainerLeft });

  return (
    <div className="tile-container" style={{ ...style }}>
      <div
        className="tile"
        style={{
          textAlign: "center",
          width: "160px",
          height: "60px",
          background: "blue",
          fontSize: 40,
          color: "white",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Tile;
