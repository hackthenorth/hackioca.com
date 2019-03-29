import React from "react";
import styled from "styled-components";
import Title from "src/components/Title";
import Body from "src/components/Body";
import SocialLinks from "src/components/NavBar/SocialLinks";
import copy from "src/copy";

import media from "src/utils/media";
import Waves from "./Waves";

const FooterContainer = styled.div`
  position: relative;
  height: 316px;
  padding: 23px 45px 75px 45px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${media.phone`
    padding: 10px;
    // flex-wrap: wrap;
  `}
`;

const FooterTitle = styled(Title)`
  color: #fff;
  margin-top: 0;
  margin-bottom: 4px;

  ${media.phone`
    font-size: 20px;
  `}
`;

const FooterBody = styled(Body)`
  color: #fff;
  ${media.phone`
    font-size: 8px;
  `}
  ${media.smallPhone`
    line-height: 15px;
  `}
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  margin-right: auto;

  ${media.smallPhone`
    align-items: flex-end;
  `}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 22px;

  ${media.phone`
    margin-left: 10px;
    line-height: 8px;
  `}

  ${media.smallPhone`
    align-items: flex-end;
  `}
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  height: 115px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 43px;
  background: #f8f8f8;
  border-radius: 50%;
`;

const LogoImg = styled.img`
  height: 39px;
`;

const Logo = (
  <LogoContainer>
    <LogoImg src="/images/navbar/logo_dark.svg" />
  </LogoContainer>
);

const NavLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 438px;
  justify-content: space-between;
  margin-top: 10px;

  ${media.phone`
    width: 200px;
  `}
`;

const NavLinkButton = styled.a`
  font-family: "Bubbleboddy";
  color: #fff;
  text-decoration: none;
  font-size: 23px;
  margin-left: 5px;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.7;
  }

  ${media.phone`
    font-size: 15px;
  `}
`;

const FooterLinks = (
  <NavLinkContainer>
    {copy.nav.sections.map(section => (
      <NavLinkButton key={section} href={`#${section}`}>
        {section}
      </NavLinkButton>
    ))}
  </NavLinkContainer>
);

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Waves />
      <LeftContainer>
        {Logo}
        <TextContainer>
          <FooterTitle>hackioca</FooterTitle>
          <FooterBody>Copyright &copy; hackioca 2019</FooterBody>
        </TextContainer>
      </LeftContainer>
      <RightContainer>
        <SocialLinks links={copy.nav.socialLinks} />
        <LinksContainer>{FooterLinks}</LinksContainer>
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;
