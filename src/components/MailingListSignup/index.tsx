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
  line-height: 100%;

  overflow: hidden;
  background-color: white;

  ${media.phone`
    width: 85vw;
    height: 40px;
    font-size: 14px;
  `}
`;

const SubText = styled(Body)`
  margin-top: 10px;
  text-align: center;

  ${media.phone`
    width: 75vw;
    margin: 10px auto;
    font-size: 12px;
  `}
`;


const MailingListSignup: React.FC = () => {

  const [signupMsg, updateSignupMsg] = useState("Sign up to hear the latest updates from Hackioca");

  const signupForMailingList = () => {
    updateSignupMsg("Thanks for signing up!");
    // window.HackerAPI.Event.MailingListSignup.create(
    //   new HackerAPI.Event({ slug: "ASK_BACKEND" }),
    //   new HackerAPI.Event.MailingListSignup({ email })
    // )
    //   .then((data) => {
    //     if (data && data.email) {
    //       // success
    //     } else {
    //       // error
    //     }
    // )
    //   .catch((err) => {
    //     // error
    //   })
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
