const Tile: React.FC<{ content: string; position: number }> = (props) => {
  return (
    <div
      className="tile-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        height: "120px",
        background: "transparent",
        transform: `translateY(${300 - props.position * 100}px)`,
      }}
    >
      <div
        className="tile"
        style={{
          textAlign: "center",
          fontSize: "0.5em",
          width: "200px",
          height: "80px",
          background: "blue",
        }}
      >
        {props.content}
      </div>
    </div>
  );
};

export default Tile;
