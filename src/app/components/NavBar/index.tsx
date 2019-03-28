import React from "react";
import styled from "styled-components";

// import media from "src/utils/media";

import SocialLink from "./socialLink";

const SECTIONS = ["about", "schedule", "judges", "workshops", "sponsors", "faq"];
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
  background: #F8F8F8;
  border-radius: 50%;
`;

const NavLinkContainer = styled.div`
  display: flex;
  width: 569px;
  justify-content: space-between;
  margin-right: 32px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
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

const navlinks = (
  <NavLinkContainer>
    {SECTIONS.map((section) => (
      <NavLink key={section} href={`#${section}`}>{section}</NavLink>
    ))}
  </NavLinkContainer>
)

const socialLinks = SOCIAL_LINKS.map(link => (
  <SocialLink key={link.name} {...link} />
));

const NavBar: React.FC = () => (
  <NavBarContainer>
    <a href="#">
      <LogoContainer>
        <Logo src={"/images/navbar/logo_dark.svg"} />
      </LogoContainer>
    </a>
    <LinksContainer>
      {navlinks}
      <SocialLinkContainer>{socialLinks}</SocialLinkContainer>
    </LinksContainer>
  </NavBarContainer>
);

export default NavBar;