import React from "react";
import styled from "styled-components";

import copy from "src/copy";
import media from "src/utils/media";
import Anchor from "src/components/Anchor";
import Title from "src/components/Title";
import Subtitle from "src/components/Subtitle";
import Shapes from "src/components/Shapes";

const WorkshopContainer = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 129px;
  ${media.phone`
    padding: 0 25px;
  `}
`;

const Workshop = styled.div`
  font-family: "Raleway";
  color: #51192c;
  margin-bottom: 32px;
  width: 30%;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  ${media.phone`
    width: 100%;
    text-align: center;
    p {
      font-size: 18px;
    }
  `}
`;

const Body = (
  <BodyContainer>
    {copy.workshops.body.map(({ workshop, desc }) => (
      <Workshop key={workshop}>
        <Subtitle>{workshop}</Subtitle>
        <p>{desc}</p>
      </Workshop>
    ))}
  </BodyContainer>
);

const Workshops: React.FC = () => (
  <WorkshopContainer>
    <Shapes
      shapes={[
        { top: 12, left: 2, scale: 0.5, angle: 60 },
        { top: 35, left: 1, scale: 0.65, angle: 120 },
        { top: 60, left: 1, scale: 0.8, angle: 90 },
        { top: 85, left: 1, scale: 0.5, angle: 120 }
      ]}
    />
    <Shapes
      shapes={[
        { top: 10, left: 92, scale: 1, angle: 90 },
        { top: 35, left: 95, scale: 0.75, angle: 10 },
        { top: 63, left: 93, scale: 0.75, angle: 40 },
        { top: 85, left: 95, scale: 0.5, angle: 80 }
      ]}
    />
    <Anchor id="workshops" />
    <Title>{copy.workshops.title}</Title>
    {Body}
  </WorkshopContainer>
);

export default React.memo(Workshops);
