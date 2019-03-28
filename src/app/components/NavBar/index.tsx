import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import media from "src/utils/media";

import NavLinks from "./navLinks";
import SocialLink from "./socialLink";

const SECTIONS = [
  "about",
  "schedule",
  "judges",
  "workshops",
  "sponsors",
  "faq"
];

const SOCIAL_LINKS = [
  {
    name: "facebook",
    icon: "facebook.png",
    link: "https://facebook.com"
  },
  {
    name: "twitter",
    icon: "twitter.png",
    link: "twitter.com"
  },
  {
    name: "instagram",
    icon: "instagram.png",
    link: "instagram.com"
  }
];

const NavBarContainer = styled.nav`
  font-family: "Bubbleboddy";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 94px;
  background: #333;
  padding: 0 55px;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  background: #f8f8f8;
  border-radius: 50%;
`;

const Logo = styled.img`
  height: 58px;
`;

const SocialLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 197px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HamburgerMenu = styled.img`
  width: 33px;
`;

const socialLinks = SOCIAL_LINKS.map(link => (
  <SocialLink key={link.name} {...link} />
));

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #333;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

const CloseContainer = styled.a`
  position: absolute;
  top: 40px;
  right: 40px;
`;

const CloseIcon = styled.img`
  width: 26px;
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
  const mobile = useWindowWidth() <= 700 ? true : false;
  const [showMobileMenu, toggleMobileMenu] = useState(false);

  // console.log(mobile);
  // console.log(showMobileMenu);

  return (
    <>
      <NavBarContainer>
        <a href="#">
          <LogoContainer>
            <Logo src={"/images/navbar/logo_dark.svg"} />
          </LogoContainer>
        </a>
        <LinksContainer>
          {mobile ? (
            <a href="#" onClick={() => toggleMobileMenu(true)}>
              <HamburgerMenu src={`/images/navbar/hamburger.svg`} alt="menu" />
            </a>
          ) : (
            <>
              <NavLinks sections={SECTIONS} clickHandler={toggleMobileMenu} />
              <SocialLinkContainer>{socialLinks}</SocialLinkContainer>
            </>
          )}
        </LinksContainer>
        {showMobileMenu && (
          <MobileMenu>
            <CloseContainer href="#" onClick={() => toggleMobileMenu(false)}>
              <CloseIcon src={`/images/navbar/cross.svg`} />
            </CloseContainer>
            <NavLinks sections={SECTIONS} clickHandler={toggleMobileMenu} />
            <SocialLinkContainer>{socialLinks}</SocialLinkContainer>
          </MobileMenu>
        )}
      </NavBarContainer>
    </>
  );
};

export default NavBar;
