import React, { useState, useCallback } from "react";
import styled from "styled-components";
import media from "src/utils/media";


// will move this to North tmr


interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
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
    background-color: #461626;
  }

  ${media.phone`
    width: 25vw;
  `}
`;

const Button: React.FC<ButtonProps> = ({ label }) => {
  const [ buttonStatus, updateButtonStatus ] = useState("READY");

  const memoSignupForML = useCallback(() => {
    window.HackerAPI.Event.MailingListSignup.create(
      new HackerAPI.Event({ slug: ASK_BACKEND }),
      new HackerAPI.Event.MailingListSignup({ email })
    )
    .then(data => {
      if (data && data.email) {
        // success
        updateButtonStatus("SUCCESS");
      } else {
        // error
        updateButtonStatus("ERROR");
      }
    )
    .catch((err) => {
      // error
      updateButtonStatus("ERROR");
    })

  }, [])

  return (
    <StyledButton>
        {buttonStatus === "READY" ? label : "Error"}
    </StyledButton>
  );
};

export default Button;
