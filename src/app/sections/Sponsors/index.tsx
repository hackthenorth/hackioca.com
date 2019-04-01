import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";

import Title from "src/components/Title";
import Anchor from "src/components/Anchor";
import Shapes from "src/components/Shapes";

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: grid;
  margin: 0 auto 40px auto;
  max-width: 750px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 50% 45%;
  grid-gap: 40px 0;

  ${media.phone`
    max-width: 350px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
    `}
`;

interface ItemProps {
  offset?: boolean;
}

const Item = styled.img<ItemProps>`
  width: 125px;
  text-align: center;
  grid-column: span 2;

  &:nth-child(5) {
    grid-column: 2 / span 2;
  }

  ${media.phone`
    grid-column: span 1;

    &:nth-child(5) {
        grid-column: span 1;
    }
    &:nth-child(7) {
        grid-column: span 2;
    }
    `}
`;

const Sponsors = () => (
  <Container>
    <Shapes
      shapes={[
        { top: 12, left: 2, scale: 0.5, angle: 60 },
        { top: 30, left: 4, scale: 0.65, angle: 120 },
        { top: 60, left: 1, scale: 0.8, angle: 90 },
        { top: 90, left: 1, scale: 0.5, angle: 120 }
      ]}
    />
    <Shapes
      shapes={[
        { top: 12, left: 95, scale: 0.75, angle: 10 },
        { top: 43, left: 93, scale: 0.75, angle: 40 },
        { top: 85, left: 95, scale: 0.5, angle: 80 }
      ]}
    />
    <Anchor id="sponsors" />
    <Title>{copy.sponsors.title}</Title>
    <Wrapper>
      {copy.sponsors.companies.map(company => (
        <Item
          data-tip={company.name}
          key={company.path}
          src={`/images/supporters/${company.path}.png`}
        />
      ))}
    </Wrapper>
  </Container>
);

export default React.memo(Sponsors);
