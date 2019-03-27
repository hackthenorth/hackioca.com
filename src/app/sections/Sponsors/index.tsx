import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";

const Header = styled.h1`
  font-family: "Bubbleboddy";
  font-size: 48px;
  color: #000;
  text-align: center;
`;

const Wrapper = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1000px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 50% 45%;

  ${media.phone`
    max-width: 350px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    `}
`;

interface ItemProps {
  offset?: boolean;
}

const Item = styled.img<ItemProps>`
  width: 125px;
  text-align: center;
  grid-column: span 2;
  margin-top: ${props => (props.offset ? "-50px" : "0")};

  &:nth-child(5) {
    grid-column: 2 / span 2;
  }

  ${media.phone`
    grid-column: span 1;
    margin-top: 0;

    &:nth-child(5) {
        grid-column: span 1;
    }
    &:nth-child(7) {
        grid-column: span 2;
    }
    `}
`;

const Sponsors = () => (
  <div id="sponsors">
    <Header>{copy.sponsors.title}</Header>
    <Wrapper>
      <Item src="../images/test1.png" />
      <Item src="../images/test6.png" />
      <Item src="../images/test5.png" />
      <Item src="../images/test7.png" />
      <Item offset src="../images/test2.png" />
      <Item src="../images/test4.png" />
      <Item offset src="../images/test3.png" />
    </Wrapper>
  </div>
);

export default React.memo(Sponsors);
