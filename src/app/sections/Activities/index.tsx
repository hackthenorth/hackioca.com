import React from "react";
import styled from "styled-components";

import copy from "src/copy";
import media from "src/utils/media";

const Title = styled.h1`
  font-family: "Bubbleboddy";
  font-size: 48px;
  color: #000;
  text-align: center;

  ${media.phone`
    font-size: 40px;
  `}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 9%;

  ${media.phone`
    padding: 0 25px;
  `}
`;

const Activity = styled.div`
  font-family: Raleway;
  color: #51192c;
  margin-bottom: 32px;
  width: 47.3%;

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
  <Container>
    {copy.activities.body.map(({ activity, desc }) => (
      <Activity>
        <h4>{activity}</h4>
        <p>{desc}</p>
      </Activity>
    ))}
  </Container>
);

const Activities: React.FC = () => (
  <div id="activities">
    <Title>{copy.activities.title}</Title>
    {Body}
  </div>
);

export default React.memo(Activities);
