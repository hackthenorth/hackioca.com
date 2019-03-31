import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";

import Title from "src/components/Title";
import Anchor from "src/components/Anchor";

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
  <div>
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
  </div>
);

export default React.memo(Sponsors);
