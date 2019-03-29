import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";
import Anchor from "src/components/Anchor";
import BaseTitle from "src/components/Title";

import ImgBoilingBobaGif from "src/static/images/boiling_boba_about.gif";


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

const Title = styled(BaseTitle)`
  text-align: left;
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
      <div>
          <Title>{copy.about.title}</Title>
          <Section>
              <Paragraph>{copy.about.desc}</Paragraph>
              <Image src={ImgBoilingBobaGif} />
      </Section>
    </div>
  </Wrapper>
);

export default About;
