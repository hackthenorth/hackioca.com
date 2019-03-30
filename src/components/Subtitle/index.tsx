import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import media from "src/utils/media";

const Subtitle: StyledComponent<"h2", {}> = styled.h2`
  font-weight: 700;
  line-height: 45px;
  font-size: 32px;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: "Raleway";
  color: #51192c;

  ${media.phone`
    text-align: center;
    font-size: 24px;
  `}
`;

export default React.memo(Subtitle);
