import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  display: flex;

  ${media.phone`
    flex-direction: column;
    align-items: center;
    `}
`;

const Header = styled.h1`
  font-family: Bubbleboddy;
  font-size: 48px;
  color: #000000;
  margin-bottom: 5px;

  ${media.phone`
    text-align: center;
  `}
`;

const Paragraph = styled.p`
  font-family: Raleway, sans-serif;
  font-size: 16px;
  line-height: 1.5em;
  color: #51192c;
  width: 275px;
  margin-right: 50px;

  ${media.phone`
    text-align: center;
    margin-right: 0;
    width: 280px;
  `}
`;

const Image = styled.img`
  width: 175px;
  height: 185px;

  ${media.phone`
    width: 145px;
    height: 155px;
  `}
`;

const About: React.FC = () => (
  <Wrapper>
    <div>
      <Header>{copy.about.title}</Header>
      <Section>
        <Paragraph>{copy.about.desc}</Paragraph>
        <Image src="images/boiling_boba_about.gif" />
      </Section>
    </div>
  </Wrapper>
);

export default About;
