import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled.h1`
  font-family: "Bubbleboddy";
  font-size: 48px;
  text-transform: lowercase;
  color: #000000;
  margin-bottom: 5px;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-family: "Raleway";
  font-size: 16px;
  line-height: 1.5em;
  color: #51192c;
  width: 275px;
  margin-right: 50px;

  @media (max-width: 700px) {
    text-align: center;
    margin-right: 0;
    width: 280px;
  }
`;

const Image = styled.img`
  width: 175px;
  height: 185px;

  @media (max-width: 700px) {
    width: 145px;
    height: 155px;
  }
`;

const About = (): JSX.Element => (
  <Wrapper>
    <div>
      <Header> About </Header>
      <Section>
        <Paragraph>
          Hackioca is the first boba-themed hackathon, where your love for boba
          and tech intertwine. Immerse yourself in a weekend filled with
          workshops, and activities at the Taipei 101. Join hackers from all
          around the globe who share the passion for world-class builds and
          boba.
        </Paragraph>
        <Image src="images/boiling_boba_about.gif" />
      </Section>
    </div>
  </Wrapper>
);

export default About;
