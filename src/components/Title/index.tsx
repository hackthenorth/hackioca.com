import styled, { StyledComponent } from "styled-components";
import media from 'src/utils/media';

const Title: StyledComponent<"h1", {}> = styled.h1`
  font-family: "Bubbleboddy";
  font-size: 48px;
  color: #000000;
  margin-bottom: 32px;
  text-align: center;
  ${media.phone`
    font-size: 40px;
  `}
`;

export default Title;
