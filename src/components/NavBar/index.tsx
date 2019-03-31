import React, { useState, useEffect } from "react";
import styled from "styled-components";
import smoothscroll from "smoothscroll-polyfill";

import media, { sizes as breakpoints } from "src/utils/media";
import copy from "src/copy";

import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import MenuIcon from "./MenuIcon";
import { LogoContainer, LogoImg } from "src/components/Logo";
import { animateInMenu, animateOutMenu } from "./animations";

const NavBarContainer = styled.nav`
  font-family: "Bubbleboddy";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 61px;
  background: #333;
  padding: 0 55px;
  display: flex;
  align-items: center;
  z-index: 10;

  ${media.tablet`
    padding: 0 24px;
  `}
`;

const NavLogoContainer = styled(LogoContainer)`
  width: 43px;
  height: 43px;
  &:hover {
    opacity: 0.7;
  }
`;

const NavLogoImg = styled(LogoImg)`
  height: 39px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 0px;
  height: 0px;
  position: absolute;
  top: 31px;
  right: 36px;
  background: #333;
  -webkit-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  -moz-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  -ms-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  -o-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);

  &.expand {
    width: 2000px;
    height: 2000px;
    top: -560px;
    right: -565px;
    -webkit-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
  }
`;

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return width;
};

const NavBar: React.FC = () => {
  const mobile = useWindowWidth() <= breakpoints.navbar;
  const [showMobileMenu, toggleMobileMenu] = useState(false);

  const scrollTo = (id: string) => {
    toggleMobileMenu(false);
    animateOutMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleMobileMenu(true);
    animateInMenu();
  };

  const closeMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleMobileMenu(false);
    const circle = document.getElementById("circle");
    if (circle) circle.classList.remove("expand");
    animateOutMenu();
  };

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <NavBarContainer>
      <a href="#" onClick={() => scrollTo("#home")}>
        <NavLogoContainer>
          <NavLogoImg src="/images/navbar/logo_dark.svg" />
        </NavLogoContainer>
      </a>
      <LinksContainer>
        {mobile ? (
          <MenuIcon isOpen={showMobileMenu} open={openMenu} close={closeMenu} />
        ) : (
          <>
            <NavLinks sections={copy.nav.sections} clickHandler={scrollTo} />
            <SocialLinks links={copy.nav.socialLinks} />
          </>
        )}
      </LinksContainer>
      {showMobileMenu && (
        <MobileMenu>
          <NavLinks
            animate
            sections={copy.nav.sections}
            clickHandler={scrollTo}
          />
          <SocialLinks links={copy.nav.socialLinks} />
        </MobileMenu>
      )}
      <Circle id="circle" />
    </NavBarContainer>
  );
};

export default NavBar;
