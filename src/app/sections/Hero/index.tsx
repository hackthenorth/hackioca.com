import React from "react";
import styled from "styled-components";
import media from "src/utils/media";

import copy from "src/copy";

import MailingListSignup from "src/components/MailingListSignup";
import SectionWrapper from "src/components/SectionWrapper";
import BobaCustomizer from "./BobaCustomizer";
import Shapes from "src/components/Shapes";

const HeroWrapper = styled(SectionWrapper)`
  margin: 75px auto;
  position: relative;

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

const HeroContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroSection: React.FC = () => (
  <HeroWrapper>
    <HeroContentWrapper>
      <BobaCustomizer />

      <HeroTitle>{copy.hero.title}</HeroTitle>
      <HeroDesc>
        <div className="subtitle">{copy.hero.subtitle}</div>
        <div className="details">{copy.hero.eventDate}</div>
        <div className="details">{copy.hero.eventLoc}</div>
      </HeroDesc>

      <MailingListSignup />
    </HeroContentWrapper>
    <Shapes
      shapes={[
        { top: 12, left: 10, scale: 0.5, angle: 60 },
        { top: 25, left: 15, scale: 0.75, angle: 120 },
        { top: 45, left: 7, scale: 0.9, angle: 30 },
        { top: 80, left: 5, scale: 0.5, angle: 120 }
      ]}
    />
    <Shapes
      shapes={[
        { top: 10, left: 80, scale: 1, angle: 90 },
        { top: 35, left: 90, scale: 0.75, angle: 10 },
        { top: 55, left: 80, scale: 0.75, angle: 40 },
        { top: 65, left: 75, scale: 0.4, angle: 60 },
        { top: 85, left: 95, scale: 0.5, angle: 80 }
      ]}
    />
    <div id="home">
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
