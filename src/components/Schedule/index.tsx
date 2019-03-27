import React from "react";
import copy from "src/copy";
import media from "src/utils/media";
import styled from "styled-components";

import Activity from "src/components/Activity";

const Wrapper = styled.div`
  padding: 0 15px;
`;

const Header = styled.h1`
  font-family: "Bubbleboddy";
  font-size: 48px;
  color: #000;
  text-align: center;
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

const Title = styled.h3`
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

const Schedule = () => (
  <Wrapper id="schedule">
    <Header>{copy.schedule.title}</Header>
    <Chalkboard>
      <Title>{copy.schedule.dayOne.title}</Title>
      <Activities>
        {copy.schedule.dayOne.events.map(({ title, time }, i) => (
          <Activity key={`dayOne-event-${i}`} title={title} time={time} />
        ))}
      </Activities>
    </Chalkboard>

    <Chalkboard>
      <Title>{copy.schedule.dayTwo.title}</Title>
      <Activities>
        {copy.schedule.dayTwo.events.map(({ title, time }, i) => (
          <Activity key={`dayTwo-event-${i}`} title={title} time={time} />
        ))}
      </Activities>
    </Chalkboard>

    <Chalkboard>
      <Title>{copy.schedule.dayThree.title}</Title>
      <Activities>
        {copy.schedule.dayThree.events.map(({ title, time }, i) => (
          <Activity key={`dayThree-event-${i}`} title={title} time={time} />
        ))}
      </Activities>
    </Chalkboard>
  </Wrapper>
);

export default Schedule;
