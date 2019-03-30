import React from "react";
import styled from "styled-components";

import copy from "src/copy";
import media from "src/utils/media";
import Anchor from "src/components/Anchor";
import Title from "src/components/Title";
import Subtitle from 'src/components/Subtitle';

const ActivityContainer = styled.div`
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

const Activity = styled.div`
  font-family: "Raleway";
  color: #51192c;
  margin-bottom: 32px;
  width: 47.3%;

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
    {copy.activities.body.map(({ activity, desc }) => (
      <Activity key={activity}>
        <Subtitle>{activity}</Subtitle>
        <p>{desc}</p>
      </Activity>
    ))}
  </BodyContainer>
);

const Activities: React.FC = () => (
  <ActivityContainer>
    <Anchor id="activities" />
    <Title>{copy.activities.title}</Title>
    {Body}
  </ActivityContainer>
);

export default React.memo(Activities);
