import React, { useState } from "react";
import styled from "styled-components";
import media from "src/utils/media";
import { Button } from "@hackthenorth/north";

import Body from "src/components/Body";
import TextInput from "src/components/TextInput";

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

const SubText = styled(Body)`
  margin-top: 10px;
  text-align: center;
`;


const MailingListSignup: React.FC = () => {

  const [ signupMsg, updateSignupMsg ] = useState("Sign up to hear the latest updates from Hackioca");

  const signupForMailingList = () => {
    updateSignupMsg("Thanks for signing up!");
  };

  return (
    <>
        <Container>
            <TextInput placeholder="gimmemyboba@gmail.com" />
            <Button variant="hero" onClick={signupForMailingList}>
                Order Now
            </Button>

        </Container>
        <SubText>{signupMsg}</SubText>
    </>
  )
};

export default MailingListSignup;
