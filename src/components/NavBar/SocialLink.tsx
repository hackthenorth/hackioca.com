import React from "react";
import styled from "styled-components";

import media from "src/utils/media";

interface SocialLinkProps {
  name: string;
  icon: string;
  link: string;
}

const IMG_PATH = "/images/socials/";

const SocialImg = styled.img`
  width: 25px;

  &:hover {
    opacity: 0.7;
  }

  ${media.phone`
    width: 40px;
  `}
`;

const SocialLink: React.FC<SocialLinkProps> = ({ name, icon, link }) => (
  <a key={name} href={link}>
    <SocialImg src={`${IMG_PATH}${icon}`} alt={name} />
  </a>
);

export default SocialLink;
