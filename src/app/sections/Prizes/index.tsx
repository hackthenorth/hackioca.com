import * as React from "react";
import styled from "styled-components";
import Title from "src/components/Title";
import copy from "src/copy";
import Prize from "./prize";
import media from "src/utils/media";
import Anchor from "src/components/Anchor";

const Section = styled.div`
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
  <Section>
    <Anchor id="prizes" />
    <Title>{copy.prizes.title}</Title>
    <Container>{prizeList}</Container>
  </Section>
);

export default React.memo(Prizes);
