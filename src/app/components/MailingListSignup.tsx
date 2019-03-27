import React from "react";
import styled from "styled-components";
import media from "src/utils/media";


// replace with mailinglist stuff
const Container = styled.div`
  position: relative;
  width: 585px;
  height: 100px;
  margin: auto;

  // remove everything below this when component is finished
  background-color: white;
  ${media.phone`
    width: 90vw;
  `}
`;


const MailingListSignup: React.FC = () => (
  <Container>
      implement the mailing list here
  </Container>
)



export default MailingListSignup;
