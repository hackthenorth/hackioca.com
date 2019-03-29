import React from "react";
import styled from "styled-components";
import media from "src/utils/media";

import ImgTeapot from "src/static/images/404teapot.svg";
import Subtitle from "src/components/Subtitle";

const Container = styled.div`
  position: relative;
  width: 800px;
  margin: 100px auto;

  display: flex;
  flex-direction: column;

  & > * {
    text-align: center;
  }

  ${media.phone`
    margin: 40vh auto;
  `}
`;

const ErrorImg = styled.img`
  max-width: 70%;
  max-height: 400px;

  margin: auto;
`;

const RouteNotFound: React.FC = () => (
  <Container>
    <Subtitle>
      Error 418: I'm a teapot and I can&apos;t find this page ¯\_(ツ)_/¯
    </Subtitle>
    <ErrorImg src={ImgTeapot} />
  </Container>
);

export default RouteNotFound;
