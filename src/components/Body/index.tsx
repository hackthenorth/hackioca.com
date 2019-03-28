import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import media from "src/utils/media";

const Body: StyledComponent<"p", {}> = styled.p`
  line-height: 22px;
  font-size: 16px;
  font-family: "Raleway";
  color: #51192c;
  margin: 0 0 5px;

  ${media.phone`
    text-align: center;
  `}
`;

export default React.memo(Body);
