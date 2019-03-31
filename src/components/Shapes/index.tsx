import React from "react";
import Shape, { ShapeProps } from "src/components/Shape";
import posed, { PoseGroup } from "react-pose";

interface ShapesProps {
  shapes: ShapeProps[];
}

const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const Shapes = ({ shapes }: ShapesProps) => (
  <PoseGroup>
    {shapes.map(({ top, left, scale, angle }) => (
      <Item key={`${top}-${left}-${scale}-${angle}`}>
        <Shape
          key={`${top}-${left}-${scale}-${angle}`}
          top={top}
          left={left}
          scale={scale}
          angle={angle}
        />
      </Item>
    ))}
  </PoseGroup>
);

export default React.memo(Shapes);
