import React from "react";
import styled from "styled-components";

import siteCopy from "src/siteCopy";

import MailingListSignup from "src/app/components/MailingListSignup";
import SectionWrapper from "src/app/components/SectionWrapper";
import BobaPicker from "./BobaPicker";

const HeroWrapper = styled(SectionWrapper)`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: auto;
  }
`;


const HeroTitle = styled.h1`
  margin: auto;

  font-family: Bubbleboddy;
  font-weight: 800;
  font-size: 90px;
  line-height: 100px;
  text-transform: lowercase;
  text-align: center;
  color: #51192c;
`;


const HeroDesc = styled.div`
  font-family: Raleway;
  font-size: 24px;
  text-align: center;
  margin-bottom: 0.5em;

  & div.subtitle {
    margin-bottom: 0.5em;

    text-transform: uppercase;
    color: black;
  }

  & div.details {
    text-transform: capitalize;
    color: #51192c;
  }
`;



const HeroSection: React.FC = () => (
  <HeroWrapper>
    <div>
      <BobaPicker />

      <HeroTitle>{siteCopy.hero.title}</HeroTitle>
      <HeroDesc>
        <div className="subtitle">{siteCopy.hero.subtitle}</div>
        <div className="details">{siteCopy.hero.eventDate}</div>
        <div className="details">{siteCopy.hero.eventLoc}</div>
      </HeroDesc>

      <MailingListSignup />
    </div>
  </HeroWrapper>
);

export default HeroSection;
