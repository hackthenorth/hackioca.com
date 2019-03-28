import React from "react";
import styled from "styled-components";
import media from "src/utils/media";

import copy from "src/copy";

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

  ${media.phone`
    font-size: 72px;
  `}
`;

const HeroDesc = styled.div`
  font-family: Raleway;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5em;

  ${media.phone`
    font-size: 18px;
  `}

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

          <HeroTitle>{copy.hero.title}</HeroTitle>
          <HeroDesc>
              <div className="subtitle">{copy.hero.subtitle}</div>
              <div className="details">{copy.hero.eventDate}</div>
              <div className="details">{copy.hero.eventLoc}</div>
      </HeroDesc>

      <MailingListSignup />
    </div>
  </HeroWrapper>
);

export default HeroSection;
