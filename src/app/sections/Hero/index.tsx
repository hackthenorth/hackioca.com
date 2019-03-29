import React from "react";
import styled from "styled-components";
import media from "src/utils/media";

import copy from "src/copy";

import MailingListSignup from "src/components/MailingListSignup";
import SectionWrapper from "src/components/SectionWrapper";
import BobaCustomizer from "./BobaCustomizer";

const HeroWrapper = styled(SectionWrapper)`
  margin: 75px auto;

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
  font-weight: 500;
  text-align: center;
  margin-bottom: 1em;

  ${media.phone`
    margin-bottom: 1.5em;
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
      <BobaCustomizer />

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

export default React.memo(HeroSection);
