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
  color: #000000;
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

const Activites = styled.ul`
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
  <Wrapper>
    <Header>{copy.schedule.title}</Header>
    <Chalkboard>
      <Title>{copy.schedule.dayOne.title}</Title>
      <Activites>
        <Activity
          name={copy.schedule.dayOne.registration.title}
          time={copy.schedule.dayOne.registration.time}
        />
        <Activity
          name={copy.schedule.dayOne.dinner.title}
          time={copy.schedule.dayOne.dinner.time}
        />
        <Activity
          name={copy.schedule.dayOne.workshopOne.title}
          time={copy.schedule.dayOne.workshopOne.time}
        />
        <Activity
          name={copy.schedule.dayOne.opening.title}
          time={copy.schedule.dayOne.opening.time}
        />
        <Activity
          name={copy.schedule.dayOne.activityOne.title}
          time={copy.schedule.dayOne.activityOne.time}
        />
        <Activity
          name={copy.schedule.dayOne.workshopTwo.title}
          time={copy.schedule.dayOne.workshopTwo.time}
        />
      </Activites>
    </Chalkboard>

    <Chalkboard>
      <Title>{copy.schedule.dayTwo.title}</Title>
      <Activites>
        <Activity
          name={copy.schedule.dayTwo.snackOne.title}
          time={copy.schedule.dayTwo.snackOne.time}
        />
        <Activity
          name={copy.schedule.dayTwo.workshopOne.title}
          time={copy.schedule.dayTwo.workshopOne.time}
        />
        <Activity
          name={copy.schedule.dayTwo.workshopTwo.title}
          time={copy.schedule.dayTwo.workshopTwo.time}
        />
        <Activity
          name={copy.schedule.dayTwo.breakfast.title}
          time={copy.schedule.dayTwo.breakfast.time}
        />
        <Activity
          name={copy.schedule.dayTwo.workshopThree.title}
          time={copy.schedule.dayTwo.workshopThree.time}
        />
        <Activity
          name={copy.schedule.dayTwo.lunch.title}
          time={copy.schedule.dayTwo.lunch.time}
        />
        <Activity
          name={copy.schedule.dayTwo.activityOne.title}
          time={copy.schedule.dayTwo.activityOne.time}
        />
        <Activity
          name={copy.schedule.dayTwo.snackTwo.title}
          time={copy.schedule.dayTwo.snackTwo.time}
        />
        <Activity
          name={copy.schedule.dayTwo.dinner.title}
          time={copy.schedule.dayTwo.dinner.time}
        />
        <Activity
          name={copy.schedule.dayTwo.activityTwo.title}
          time={copy.schedule.dayTwo.activityTwo.time}
        />
      </Activites>
    </Chalkboard>

    <Chalkboard>
      <Title>{copy.schedule.dayThree.title}</Title>
      <Activites>
        <Activity
          name={copy.schedule.dayThree.snackOne.title}
          time={copy.schedule.dayThree.snackOne.time}
        />
        <Activity
          name={copy.schedule.dayThree.workshopOne.title}
          time={copy.schedule.dayThree.workshopOne.time}
        />
        <Activity
          name={copy.schedule.dayThree.workshopTwo.title}
          time={copy.schedule.dayThree.workshopTwo.time}
        />
        <Activity
          name={copy.schedule.dayThree.judging.title}
          time={copy.schedule.dayThree.judging.time}
        />
        <Activity
          name={copy.schedule.dayThree.activityOne.title}
          time={copy.schedule.dayThree.activityOne.time}
        />
        <Activity
          name={copy.schedule.dayThree.lunch.title}
          time={copy.schedule.dayThree.lunch.time}
        />
        <Activity
          name={copy.schedule.dayThree.closing.title}
          time={copy.schedule.dayThree.closing.time}
        />
      </Activites>
    </Chalkboard>
  </Wrapper>
);

export default Schedule;
