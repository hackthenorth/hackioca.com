import * as React from "react";
import styled from "styled-components";
import Title from "src/components/Title";
import copy from "src/copy";
import Prize from "./Prize";
import media from "src/utils/media";
import Anchor from "src/components/Anchor";

import Shapes from "src/components/Shapes";

const Wrapper = styled.div`
  position: relative;
`;

const Section = styled.div`
  position: relative;
  width: 800px;
  margin: 0 auto;
  max-width: calc(100% - 80px);
  ${media.phone`
    max-width: calc(100% - 40px);
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const prizeList = copy.prizes.prizes.map(prize => (
  <Prize {...prize} key={prize.title} />
));

const Prizes: React.FC = () => (
  <Wrapper>
    <Shapes
      shapes={[
        { top: 25, left: -1, scale: 0.75, angle: 120 },
        { top: 60, left: 1, scale: 0.8, angle: 90 },
        { top: 85, left: 1, scale: 0.5, angle: 120 }
      ]}
    />
    <Shapes
      shapes={[
        { top: 10, left: 92, scale: 0.4, angle: 90 },
        { top: 35, left: 90, scale: 0.75, angle: 10 },
        { top: 63, left: 93, scale: 0.75, angle: 40 },
        { top: 85, left: 95, scale: 0.5, angle: 80 }
      ]}
    />
    <Section>
      <Anchor id="prizes" />
      <Title>{copy.prizes.title}</Title>
      <Container>{prizeList}</Container>
    </Section>
  </Wrapper>
);

export default React.memo(Prizes);
