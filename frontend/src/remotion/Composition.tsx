import { Fragment } from "react";
import { Sequence } from "remotion";
import { useCurrentFrame, AbsoluteFill } from "remotion";

const tilesArray =
[
  {
      "id": "first",
      "type": "stack",
      "text": "first",
      "timing": {
          "type": "fixed",
          "start": 0,
          "end": 5
      }
  },
  {
      "id": "second",
      "type": "stack",
      "text": "second",
      "timing": {
          "type": "fixed",
          "start": 1,
          "end": 4
      }
  },
  {
      "id": "third",
      "type": "stack",
      "text": "third",
      "timing": {
          "type": "fixed",
          "start": 2,
          "end": 3
      }
  }
];

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

export const MyComposition = () => {
  const frame = useCurrentFrame();

  const titleStyle = {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 100,
    color: "white",
  };

  return (
    <Fragment>
      {/* Figure out how to change the position of a tile based on the surrounding tiles, and whether they are still appearing or */}
      {tilesArray.map((tile, index, tilesArray) => {
        
        let start = tile.timing.start * 30 + 1;
        const end = tile.timing.end * 30;

        return (
          <Sequence
            from={start}
            durationInFrames={end - start}
            key={index}
          >
            <AbsoluteFill style={titleStyle}>
              <Tile content={tile.text} position={index}></Tile>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </Fragment>
  );
};
