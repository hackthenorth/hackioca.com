import React from "react";
import styled from "styled-components";
import copy from "src/copy";

import { BobaContext } from "src/utils/context/boba";

const Background = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const Waves = () => (
  <BobaContext.Consumer>
    {({ flavor }) => {
      return (
        <div>
          {copy.footer.backgrounds.map(({ flavor: bgFlavor, image }: any) => (
            <Background
              src={image}
              key={bgFlavor}
              style={{ visibility: flavor === bgFlavor ? "visible" : "hidden" }}
            />
          ))}
        </div>
      );
    }}
  </BobaContext.Consumer>
);

export default React.memo(Waves);
