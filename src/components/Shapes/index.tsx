import React from "react";
import Shape, { ShapeProps } from "src/components/Shape";

interface ShapesProps {
  shapes: ShapeProps[];
}

const Shapes = ({ shapes }: ShapesProps) => (
  <>
    {shapes.map(({ top, left, scale, angle }) => (
      <Shape
        key={`${top}-${left}-${scale}-${angle}`}
        top={top}
        left={left}
        scale={scale}
        angle={angle}
      />
    ))}
  </>
);

export default React.memo(Shapes);
