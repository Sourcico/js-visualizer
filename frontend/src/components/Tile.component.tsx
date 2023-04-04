const Tile: React.FC<{ content: string; index: number; position: string }> = ({
  content,
  index,
  position,
}) => {
  const transformAxis =
    position === "y"
      ? `translateY(${300 - index * 100}px)`
      : `translateX(${240 * index}px)`;
  return (
    <div
      className="tile-container"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "260px",
        height: "100px",
        background: "transparent",
        transform: transformAxis,
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
