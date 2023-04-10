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
  const scale = interpolate(
    frame,
    [0, 10, durationInFrames - 10 - index * 30, durationInFrames - index * 30],
    [0.9, 1, 1, 0.9]
  );

  const tileContainerHeight = 100;
  const tileContainerWidth = 260;
  const tileContainerBottom = tileContainerHeight * index;
  const tileContainerLeft = tileContainerWidth * index;

  type TileStyle = {
    opacity?: number;
    width?: number;
    height?: number;
    position?: string;
    bottom?: number;
    left?: number;
    transform?: string;
  };

  let style: React.CSSProperties = {
    opacity,
    width: tileContainerWidth,
    height: tileContainerHeight,
    position: "fixed",
    transform: `scale(${scale})`,
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
