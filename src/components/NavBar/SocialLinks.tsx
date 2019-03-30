import React from "react";
import styled from "styled-components";

import media from "src/utils/media";

interface SocialLinksProps {
  links: object[];
}

interface LinkProps {
  name: string;
  link: string;
  icon: string;
}

const IMG_PATH = "/images/icons/";

const SocialLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 131px;
  ${media.tablet`
    padding-top: 5px;
    width: 150px;
  `}

  ${media.smallPhone`
    width: 100px;
  `}
`;

const SocialImg = styled.img`
  width: 30px;
  &:hover {
    opacity: 0.7;
  }
  ${media.smallPhone`
    width: 20px;
  `}
`;

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => (
  <SocialLinkContainer>
    {links.map(({ name, link, icon }: LinkProps) => (
      <a key={name} href={link}>
        <SocialImg src={`${IMG_PATH}${icon}`} />
      </a>
    ))}
  </SocialLinkContainer>
);

export default SocialLinks;
