import React, { useState, useEffect } from "react";
import styled from "styled-components";
import smoothscroll from "smoothscroll-polyfill";

import media, { sizes as breakpoints } from "src/utils/media";
import copy from "src/copy";

import NavLinks from "./NavLinks";
import SocialLink from "./SocialLink";
import CloseIcon from "./CloseIcon";

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

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 43px;
  background: #f8f8f8;
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
  }
`;

const Logo = styled.img`
  height: 39px;
`;

const SocialLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 131px;

  ${media.tablet`
    padding-top: 5px;
    width: 150px;
  `}
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HamburgerMenu = styled.img`
  width: 33px;
`;

const socialLinks = copy.nav.socialLinks.map(link => (
  <SocialLink key={link.name} {...link} />
));

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
  const mobile = useWindowWidth() <= breakpoints.tablet; // TODO: use global breakpoint constant
  const [showMobileMenu, toggleMobileMenu] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLElement>) => {
    toggleMobileMenu(false);
    const circle = document.getElementById("circle");
    if (circle) circle.classList.remove("expand");
    const { href } = e.target as any;
    const el = document.getElementById(href.substr(href.indexOf("#") + 1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    // e.preventDefault();
    console.log("opening menu");
    toggleMobileMenu(true);
    const circle = document.getElementById("circle");
    if (circle) circle.className += " expand";
  };

  const closeMenu = (e: React.MouseEvent<HTMLElement>) => {
    // e.preventDefault();
    toggleMobileMenu(false);
    const circle = document.getElementById("circle");
    if (circle) circle.classList.remove("expand");
  };

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <NavBarContainer>
      <a href="/">
        <LogoContainer>
          <Logo src="/images/navbar/logo_dark.svg" />
        </LogoContainer>
      </a>
      <LinksContainer>
        {mobile ? (
          <a href="#" onClick={openMenu}>
            <HamburgerMenu src="/images/navbar/hamburger.svg" alt="menu" />
          </a>
        ) : (
          <>
            <NavLinks sections={copy.nav.sections} clickHandler={scrollTo} />
            <SocialLinkContainer>{socialLinks}</SocialLinkContainer>
          </>
        )}
      </LinksContainer>
      {showMobileMenu && (
        <MobileMenu>
          <CloseIcon clickHandler={closeMenu} />
          <NavLinks sections={copy.nav.sections} clickHandler={scrollTo} />
          <SocialLinkContainer>{socialLinks}</SocialLinkContainer>
        </MobileMenu>
      )}
      <Circle id="circle" />
    </NavBarContainer>
  );
};

export default NavBar;
