import React from "react";
import styled from "styled-components";
import { LinksContainer, LinkButton } from "src/components/Link";
import media from "src/utils/media";

interface NavLinkProps {
  sections: string[];
  clickHandler(id: string): void;
}

const NavLinksContainer = styled(LinksContainer)`
  margin-right: 32px;
  ${media.tablet`
    flex-direction: column;
    align-items: center;
    height: 375px;
    width: auto;
    margin-right: 0;
    margin-bottom: 24px;
  `}
`;

const NavLinkButton = styled(LinkButton)`
  ${media.phone`
    font-size: 32px;
  `}
`;

const NavLinks: React.FC<NavLinkProps> = ({ sections, clickHandler }) => (
  <NavLinksContainer>
    {sections.map(section => (
      <NavLinkButton
        key={section}
        href={`#${section}`}
        onClick={() => clickHandler(`#${section}`)}
      >
        {section}
      </NavLinkButton>
    ))}
  </NavLinksContainer>
);

export default NavLinks;
