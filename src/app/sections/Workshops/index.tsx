import React from "react";
import styled from "styled-components";

import copy from "src/copy";
import media from "src/utils/media";
import Anchor from 'src/components/Anchor';

const WorkshopContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: "Bubbleboddy";
  font-size: 48px;
  color: #000;
  text-align: center;
  ${media.phone`
    font-size: 40px;
  `}
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

  h4 {
    font-weight: 700;
    line-height: 45px;
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 16px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  ${media.phone`
    width: 100%;
    text-align: center;
    h4 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
  `}
`;

const Body = (
  <BodyContainer>
    {copy.workshops.body.map(({ workshop, desc }) => (
      <Workshop key={workshop}>
        <h4>{workshop}</h4>
        <p>{desc}</p>
      </Workshop>
    ))}
  </BodyContainer>
);

const Workshops: React.FC = () => (
  <WorkshopContainer>
    <Anchor id="workshops" />
    <Title>{copy.workshops.title}</Title>
    {Body}
  </WorkshopContainer>
);

export default React.memo(Workshops);
