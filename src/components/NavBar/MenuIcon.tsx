import React from "react";
import styled from "styled-components";

import media from "src/utils/media";
import copy from "src/copy";

interface CloseIconProps {
  isOpen: boolean;
  open(e: React.MouseEvent<HTMLElement>): void;
  close(e: React.MouseEvent<HTMLElement>): void;
}

const MenuContainer = styled.a`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 12;

  ${media.tablet`
    top: 20px;
    right: 29px;
  `}
`;

const CloseImg = styled.img`
  width: 26px;

  ${media.tablet`
    width: 20px;
  `}
`;

const HamburgerMenu = styled.img`
  width: 33px;
`;

const MenuIcon: React.FC<CloseIconProps> = ({ isOpen, open, close }) => (
  <>
    {isOpen ? (
      <MenuContainer href="#" onClick={e => close(e)}>
        <CloseImg src={copy.nav.menus.close} alt="close" />
      </MenuContainer>
    ) : (
      <MenuContainer href="#" onClick={e => open(e)}>
        <HamburgerMenu src={copy.nav.menus.hamburger} alt="hamburger" />
      </MenuContainer>
    )}
  </>
);
export default React.memo(MenuIcon);
