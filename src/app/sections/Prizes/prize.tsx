import * as React from "react";
import styled from "styled-components";
import Subtitle from "src/components/Subtitle";
import Body from "src/components/Body";
import media from "src/utils/media";

interface PrizeProps {
  title: string;
  desc: string;
  prize: string;
}

const Container = styled.div`
  width: 100%;
  flex: 0 1 45%;
  font-family: "Raleway";
  font-size: 16px;
  line-height: 1.5em;
  color: #51192c;
  margin-bottom: 22px;
  min-width: 300px;

  ${media.phone`
    flex: 1 0 100%;
  `}
`;

const Prize: React.FC<PrizeProps> = ({ title, desc, prize }) => (
  <Container>
    <Subtitle>{title}</Subtitle>
    <Body>{desc}</Body>
    <Body>
      <i>{prize}</i>
    </Body>
  </Container>
);

export default Prize;
