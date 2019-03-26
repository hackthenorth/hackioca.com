import React from "react";
import styled from "styled-components";

interface ActivityProps {
  name: string;
  time: string;
}

const Wrapper = styled.li`
  margin-bottom: 15px;
`;

const Activity = (props: ActivityProps) => (
  <Wrapper>
    <span>{props.name}</span>
    <span>{props.time}</span>
  </Wrapper>
);

export default Activity;
