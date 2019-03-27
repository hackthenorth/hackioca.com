import React from "react";
import styled from "styled-components";

interface ActivityProps {
  title: string;
  time: string;
}

const Wrapper = styled.li`
  margin-bottom: 15px;
`;

const Activity = React.memo((props: ActivityProps) => (
  <Wrapper>
    <span>{props.title}</span>
    <span>{props.time}</span>
  </Wrapper>
));

export default Activity;
