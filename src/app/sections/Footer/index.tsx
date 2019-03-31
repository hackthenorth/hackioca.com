import React from "react";
import styled from "styled-components";
import Title from "src/components/Title";
import Body from "src/components/Body";
import SocialLinks from "src/components/NavBar/SocialLinks";
import copy from "src/copy";

import media, { sizes as breakpoints } from "src/utils/media";
import Waves from "./Waves";
import { LogoContainer, LogoImg } from "src/components/Logo";
import { LinksContainer, LinkButton } from "src/components/Link";
import MailingListSignup from "src/components/MailingListSignup";
import useWindowWidth from "src/utils/hooks/useWindowWidth";

const FooterContainer = styled.div`
  margin-top: 75px;
  position: relative;
  height: 500px;
  padding: 23px 45px 75px 45px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${media.widescreen`
    height: 375px;
  `}

  ${media.phone`
    height: 316px;
    padding: 18px;
  `}
  ${media.phone`
    flex-direction: column;
    justify-content: flex-end;
  `}
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  ${media.phone`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
  `}
`;

const FooterTitle = styled(Title)`
  color: #fff;
  margin-top: 0;
  margin-bottom: 4px;

  ${media.phone`
    font-size: 16px;
  `}
  ${media.smallPhone`
    line-height: 13px;
  `}
`;

const FooterBody = styled(Body)`
  color: #fff;
  ${media.phone`
    font-size: 8px;
    line-height: 3px;
  `}
  ${media.smallPhone`
    font-size: 6px;
  `}
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  margin-right: auto;
  z-index: 1;

  ${media.smallPhone`
    align-items: flex-end;
    padding-bottom: 5px;
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
    line-height: 24px;
  `}

  ${media.smallPhone`
    align-items: flex-start;
  `}
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1;
  height: 175px;
`;

const FlexWrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const FooterLinksContainer = styled(LinksContainer)`
  flex-wrap: wrap;
  width: 438px;
  margin-top: 10px;

  ${media.phone`
    width: 200px;
  `}
`;

const FooterLinkButton = styled(LinkButton)`
  font-size: 23px;
  margin-left: 5px;
  margin-bottom: 5px;

  ${media.phone`
    font-size: 15px;
  `}
  ${media.smallPhone`
    font-size: 12px;
  `}
`;

const FooterLogoContainer = styled(LogoContainer)`
  width: 55px;
  height: 55px;
  ${media.phone`
    width: 43px;
    height: 43px;
  `}
  ${media.smallPhone`
    width: 36px;
    height: 36px;
  `}
`;

const FooterLogoImg = styled(LogoImg)`
  height: 43px;
  ${media.phone`
    height: 39px;
  `}
  ${media.smallPhone`
    height: 33px;
  `}
`;

const Logo = (
  <FooterLogoContainer>
    <FooterLogoImg src="/images/navbar/logo_dark.svg" />
  </FooterLogoContainer>
);

const FooterLinks = (
  <FooterLinksContainer>
    {copy.nav.sections.map(section => (
      <FooterLinkButton key={section} href={`#${section}`}>
        {section}
      </FooterLinkButton>
    ))}
  </FooterLinksContainer>
);

const Footer: React.FC = () => {
  const mobile = useWindowWidth() <= breakpoints.phone;
  return (
    <FooterContainer>
      <Waves />
      <FlexContainer>
        <LeftContainer>
          {Logo}
          <TextContainer>
            <FooterTitle>{copy.footer.logoText.title}</FooterTitle>
            <FooterBody>{copy.footer.logoText.copyright}</FooterBody>
          </TextContainer>
        </LeftContainer>
        <RightContainer>
          <SocialLinks links={copy.nav.socialLinks} />
          <FlexWrapContainer>{FooterLinks}</FlexWrapContainer>
          {!mobile && <MailingListSignup />}
        </RightContainer>
      </FlexContainer>
      {mobile && <MailingListSignup />}
    </FooterContainer>
  );
};

export default React.memo(Footer);
