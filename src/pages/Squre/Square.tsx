import React from "react";

interface Props {
  n: number;
  width: number;
}

const Square: React.FC<Props> = ({ n, width }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${n}, ${width / n}px)`,
        width: `${width}px`,
      }}
    >
      {Array.from({ length: n * n }).map((e) => (
        <div
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            width: `${width / n}px`,
            height: `${width / n}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Square;
