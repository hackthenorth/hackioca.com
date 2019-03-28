import React from "react";
import Shape, { ShapeProps } from "src/components/Shape";

interface ShapesProps {
  shapes: ShapeProps[];
}

const Shapes = ({ shapes }: ShapesProps) => (
  <>
    {shapes.map((shape, i) => (
      <Shape
        key={i}
        top={shape.top}
        left={shape.left}
        scale={shape.scale}
        angle={shape.angle}
      />
    ))}
  </>
);

export default React.memo(Shapes);
