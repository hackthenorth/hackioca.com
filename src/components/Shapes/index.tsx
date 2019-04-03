import React from "react";
import styled from "styled-components";

import Shape, { ShapeProps } from "src/components/Shape";
import posed, { PoseGroup } from "react-pose";
import { decay } from "popmotion";

const AnimWrapper = posed.div({
  draggable: true,
  dragEnd: { transition: decay }
});

const Wrapper = styled(AnimWrapper)`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

interface ShapesProps {
  shapes: ShapeProps[];
}

const Item = posed.div({
  enter: { opacity: 1, duration: 700, delay: 400 },
  exit: { opacity: 0, duration: 700, delay: 400 }
});

const Shapes = ({ shapes }: ShapesProps) => (
  <PoseGroup animateOnMount={true}>
    {shapes.map(({ top, left, scale, angle }) => (
      <Item key={`${top}-${left}-${scale}-${angle}`}>
        <Wrapper top={top} left={left}>
          <Shape
            key={`${top}-${left}-${scale}-${angle}`}
            top={top}
            left={left}
            scale={scale}
            angle={angle}
          />
        </Wrapper>
      </Item>
    ))}
  </PoseGroup>
);

export default React.memo(Shapes);
