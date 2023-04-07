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
  reverse?: boolean;
}> = ({ content, index, position, reverse }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, 10, durationInFrames - 10 - index * 30, durationInFrames - index * 30],
    [0, 1, 1, 0]
  );

  const tileContainerHeight = 100;
  const tileContainerWidth = 260;
  const tileContainerBottom = tileContainerHeight * index;
  const tileContainerLeft = tileContainerWidth * index;

  // position === "y" ? style.left = tileContainerLeft

  // const transformAxis =
  //   position === "y"
  //     ? `translateY(${300 - index * 100}px)`
  //     : `translateX(${240 * index}px)`;
  return (
    <div
      className="tile-container"
      style={{
        opacity,
        width: tileContainerWidth,
        height: tileContainerHeight,
        position: "fixed",
        // left: tileContainerLeft,
        bottom: tileContainerBottom,
      }}
    >
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
