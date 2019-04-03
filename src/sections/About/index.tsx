import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";
import Anchor from "src/components/Anchor";
import BaseTitle from "src/components/Title";

import Shapes from "src/components/Shapes";
import ImgBobaBoiling from "src/static/images/boiling_boba_about.gif";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Section = styled.div`
  display: flex;

  ${media.phone`
    flex-direction: column;
    align-items: center;
    `}
`;

const Title = styled(BaseTitle)`
  text-align: left;
  margin-bottom: 0;
  ${media.phone`
    text-align: center;
  `}
`;

const Paragraph = styled.p`
  font-family: "Raleway";
  font-weight: 400;
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
    <Anchor id="about" />
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
    <div>
      <Title>{copy.about.title}</Title>
      <Section>
        <Paragraph>{copy.about.desc}</Paragraph>
        <Image src={ImgBobaBoiling} />
      </Section>
    </div>
  </Wrapper>
);

export default About;
