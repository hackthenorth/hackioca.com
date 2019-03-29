import React from "react";
import copy from "src/copy";
import media from "src/utils/media";
import styled from "styled-components";

import Activity from "src/app/components/Activity";
import Anchor from 'src/components/Anchor';
import Title from 'src/components/Title';

const Wrapper = styled.div`
  padding: 0 15px;
`;

const Chalkboard = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  font-family: "Raleway";
  font-weight: 500;
  background-color: #333333;
  color: #fff;
  border: 5px solid #51192c;
  border-radius: 12px;
  padding: 10px 50px;
  max-width: 750px;

  ${media.phone`
    font-size: 13px;
    padding: 10px 10px;
  `}
`;

const ChalkboardTitle = styled.h3`
  color: #f2c834;
  font-weight: 700;
  margin-bottom: 0;
`;

const Activities = styled.ul`
  font-weight: 400;
  padding: 0;
  overflow-x: hidden;
  list-style: none;
  margin-bottom: 0;

  li:after {
    float: left;
    width: 0;
    white-space: nowrap;
    content: "........................................................................."
      "......................................................................"
      "......................................................................"
      "......................................................................";
  }
  span:first-child {
    background: #333333;
  }
  span + span {
    float: right;
    background: #333333;
    position: relative;
    z-index: 1;
  }
`;

const dayOneActivities = copy.schedule.dayOne.events.map(({ title, time }) => (
  <Activity key={title} title={title} time={time} />
));

const dayTwoActivities = copy.schedule.dayTwo.events.map(({ title, time }) => (
  <Activity key={title} title={title} time={time} />
));

const dayThreeActivities = copy.schedule.dayThree.events.map(
  ({ title, time }) => <Activity key={title} title={title} time={time} />
);

const Schedule = () => (
  <Wrapper>
    <Anchor id="schedule" />
    <Title>{copy.schedule.title}</Title>
    <Chalkboard>
      <ChalkboardTitle>{copy.schedule.dayOne.title}</ChalkboardTitle>
      <Activities>{dayOneActivities}</Activities>
    </Chalkboard>

    <Chalkboard>
      <ChalkboardTitle>{copy.schedule.dayTwo.title}</ChalkboardTitle>
      <Activities>{dayTwoActivities}</Activities>
    </Chalkboard>

    <Chalkboard>
      <ChalkboardTitle>{copy.schedule.dayThree.title}</ChalkboardTitle>
      <Activities>{dayThreeActivities}</Activities>
    </Chalkboard>
  </Wrapper>
);

export default React.memo(Schedule);
