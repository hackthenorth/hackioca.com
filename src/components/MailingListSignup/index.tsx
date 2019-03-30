import React from "react";
import styled from "styled-components";
import media from "src/utils/media";


import TextInput from "src/components/TextInput";
import Button from "src/components/Button";

const Container = styled.div`
  position: relative;
  width: 550px;
  height: 50px;
  margin: auto;
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


const MailingListSignup: React.FC = () => (
  <Container>
      <TextInput placeholder="gimmemyboba@gmail.com" />
      <Button label="Order Now" />
  </Container>
);

export default MailingListSignup;
