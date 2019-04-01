import React from "react";
import styled from "styled-components";
import copy from "src/copy";

import { BobaContext } from "src/utils/context/boba";

interface BackgroundProps {
  opacity: number;
}

const Background = styled.img<BackgroundProps>`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  -webkit-transition: opacity 1s ease-out;
  -moz-transition: opacity 1s ease-out;
  -o-transition: opacity 1s ease-out;
  transition: opacity 1s ease-out;
  opacity: ${props => props.opacity};
`;

const Waves = () => (
  <BobaContext.Consumer>
    {({ flavor }) => {
      return (
        <div>
          {copy.footer.backgrounds.map(({ flavor: bgFlavor, image }) => (
            <Background
              src={image}
              key={bgFlavor}
              opacity={flavor === bgFlavor ? 1 : 0}
            />
          ))}
        </div>
      );
    }}
  </BobaContext.Consumer>
);

export default React.memo(Waves);
