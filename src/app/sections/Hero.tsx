import React from "react";
import styled from "styled-components";
import SectionWrapper from "src/app/components/SectionWrapper";

import siteCopy from "src/siteCopy.json";

const HeroTitle = styled.h1`
  margin: auto;

  font-family: serif;
  font-weight: 800;
  font-size: 104px;
  text-transform: lowercase;
  color: #51192c;
`;

const HeroSection: React.FC = () => (
  <SectionWrapper>
    <HeroTitle>{siteCopy.hero.title}</HeroTitle>
  </SectionWrapper>
);

export default HeroSection;
