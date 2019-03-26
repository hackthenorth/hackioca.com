import React from "react";
import styled from "styled-components";
import { useBobaContext } from "src/utils/context/boba";

import PlaceholderBobaImg from "src/static/images/hero/hero_mango_boba.svg";

const Container = styled.div`
  width: 601px;
  height: 375px;

  background-color: white;

  display: flex;
  justify-content: space-between;
`;

const Boba = styled.div`
  width: 375px;
  height: 375px;
  position: relative;

  display: grid;
  justify-items: center;
  align-items: center;

  & div.circleBg {
    width: 90%;
    height: 90%;
    position: relative;
    bottom: 0;

    grid-row: 1;
    grid-column: 1;

    background-color: #F2E1CF;
    border-radius: 50%;
  }

  & img {
    max-width: 95%;
    max-height: 95%;

    z-index: 1;
    grid-row: 1;
    grid-column: 1;
  }


`;

const MailingListSignup: React.FC = () => {

  const {} = useBobaContext();

  return (
    <Container>
        <div>picker left</div>
        <Boba>
            <img src={PlaceholderBobaImg} />
            <div className="circleBg" />
        </Boba>
        <div>picker right</div>
    </Container>
  );
};



export default MailingListSignup;
