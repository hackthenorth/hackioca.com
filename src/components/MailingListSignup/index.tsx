import React, { useState, useCallback } from "react";
import styled from "styled-components";
import media from "src/utils/media";
import copy from "src/copy";
import { Button } from "@hackthenorth/north";

import Body from "src/components/Body";
import TextInput from "src/components/TextInput";

// Augment window to include HackerAPI definition
declare global {
  interface Window {
    HackerAPI: any;
  }
}

// Email validation logic, taken from
// https://github.com/hackathon/hackthenorth.com/blob/master/src/components/StyledInput/index.jsx
const validateEmailAddress = (email: string) => {
  const emailPrefix = "[A-Z0-9a-z]([A-Z0-9a-z._%+-]{0,30}[A-Z0-9a-z])?";
  const emailServer = "([A-Z0-9a-z]([A-Z0-9a-z-]{0,30}[A-Z0-9a-z])?\\.){1,5}";
  const emailRegEx = `${emailPrefix}@${emailServer}[A-Za-z]{2,6}`;
  if (email.match(emailRegEx)) {
    return true;
  }
  return false;
};

interface FormProps {
  width: string;
}

interface MailingListProps {
  isFooter?: boolean;
};

const Container = styled.form<FormProps>`
  position: relative;
  width: ${props => props.width};
  height: 50px;
  margin: 0 auto;
  position: relative;

  font-family: Raleway;
  line-height: 100%;

  ${media.phone`
    width: 85vw;
    height: 40px;
    font-size: 14px;
  `}
`;

const SubText = styled(Body)`
  margin-top: 10px;
  text-align: center;
  z-index: 1;
  color: ${props => props.color};

  ${media.phone`
    width: 75vw;
    margin: 10px auto;
    font-size: 12px;
  `}
`;


const AnimSpan = styled.span`
  @keyframes shake {
    0% { transform: translate(4px, 0); }
    50% { transform: translate(-4px, 0); }
    100% { transform: translate(0, 0); }
  }

  position: absolute;
  right: 0;
  width: 170px;
  height: 100%;

  &.shake {
    animation: shake 200ms 2 linear;
  }
`;

const MailingListSignup: React.FC<MailingListProps> = ({ isFooter }) => {
  const [signupState, updateSignupState] = useState("ready");
  const [email, updateEmail] = useState("");
  const [placeholder, updatePlaceholder] = useState("gimmemyboba@gmail.com");
  const [shouldShake, toggleShake] = useState(false);
  const { HackerAPI } = window;
  const signupForMailingList = useCallback(
    e => {
      e.preventDefault(); // stop page from refreshing onSubmit

      if (validateEmailAddress(email)) {
        updateSignupState("success");
        HackerAPI.Event.MailingListSignup.create(
          new HackerAPI.Event({ slug: "hackioca" }),
          new HackerAPI.Event.MailingListSignup({ email })
        )
          .then((data: { email: string, already_signed_up: boolean }) => {
            if (data && 'email' in data) {
              // TODO: uncomment when HackerAPI is updated
              // if(data.already_signed_up) {
              //   updateSignupState("dupe");
              //   toggleShake(true);
              // } else {}

              // success
              updateSignupState("success");
              updateEmail("");
              updatePlaceholder("morebobapls@gmail.com");
            } else {
              // signup error
              updateSignupState("error");
              toggleShake(true);
            }
          })
          .catch(() => {
            // request error
            updateSignupState("error");
            toggleShake(true);
          });
      } else {
        // email validation failed
        updateSignupState("invalid");
        toggleShake(true);
      }

      // Go back to default ready state after 2s
      setTimeout(() => updateSignupState("ready"), 2000);
    },
    [email]
  ); // only recreate this function if email changes

  let buttonVariant;
  switch(signupState) {
    case "ready": break;
    case "success": buttonVariant = "success"; break;
    default: buttonVariant = "error"; // all other states are error
  }

  return (
    <>
      <Container width={isFooter ? "100%" : "550px"} onSubmit={e => signupForMailingList(e)}>
        <TextInput
          placeholder={placeholder}
          type="email"
          value={email}
          onChange={(newEmail: string) => updateEmail(newEmail)}
        />
        <AnimSpan className={shouldShake ? "shake" : ""} onAnimationEnd={() => toggleShake(false)}>
          <Button variant={buttonVariant} onClick={signupForMailingList}>
            Order Now
          </Button>
        </AnimSpan>
      </Container>
      <SubText color={isFooter ? "#fff" : ""}>{copy.hero.signup[signupState]}</SubText>
    </>
  );
};

export default MailingListSignup;
