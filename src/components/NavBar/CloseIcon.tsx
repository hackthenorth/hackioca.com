import React from "react";
import styled from "styled-components";

// import media from "src/utils/media";

interface CloseIconProps {
  clickHandler(e: React.MouseEvent<HTMLElement>): void;
}

const CloseContainer = styled.a`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const CloseImg = styled.img`
  width: 26px;
`;

const CloseIcon: React.FC<CloseIconProps> = ({ clickHandler }) => (
  <CloseContainer href="#" onClick={e => clickHandler(e)}>
    <CloseImg src={`/images/navbar/cross.svg`} />
  </CloseContainer>
);
export default CloseIcon;
