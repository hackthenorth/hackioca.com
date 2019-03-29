import React from "react";
import styled from "styled-components";
import media from "src/utils/media";

// replace with mailinglist stuff
const Container = styled.div`
  position: relative;
  width: 550px;
  height: 50px;
  margin: auto;
  padding-left: 20px;
  position: relative;

  border-radius: 50px;

  font-family: Raleway;
  line-height: 50px;

  overflow: hidden;
  background-color: white;

  ${media.phone`
    width: 75vw;
  `}
`;


const SubmitButton = styled.div`
  position: absolute;
  width: 170px;
  height: 50px;
  right: 0;
  display: inline-block;

  font-family: Raleway;
  font-weight: 600;
  color: white;
  text-align: center;
  line-height: 50px;

  cursor: pointer;

  transition: background-color 200ms ease-in-out;
  background-color: #51192c;
  &:hover {
    background-color: #37121E;
  }

  ${media.phone`
    width: 25vw;
  `}
`;

const MailingListSignup: React.FC = () => (
  <Container>
    gimmemyboba@gmail.com
      <SubmitButton>
      Order Now
      </SubmitButton>
  </Container>
);

export default MailingListSignup;
