import React from "react";
import Shape, { ShapeProps } from "src/components/Shape";
import posed, { PoseGroup } from "react-pose";

interface ShapesProps {
  shapes: ShapeProps[];
}

const Item = posed.div({
  enter: { opacity: 1, duration: 1000 },
  exit: { opacity: 0, duration: 1000 }
});

const Shapes = ({ shapes }: ShapesProps) => (
  <PoseGroup animateOnMount={true}>
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
