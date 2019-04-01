import React, { useEffect } from "react";
import styled from "styled-components";
import { LinksContainer, LinkButton } from "src/components/Link";
import media from "src/utils/media";

interface NavLinkProps {
  sections: string[];
  clickHandler(id: string): void;
  animate?: boolean;
}

const NavLinksContainer = styled(LinksContainer)`
  margin-right: 32px;

  ${media.navbar`
    flex-direction: column;
    align-items: center;
    height: 375px;
    width: auto;
    margin-right: 0;
    margin-bottom: 24px;
  `}
`;

const NavLinkButton = styled(LinkButton)`
  ${media.navbar`
    z-index: 20;
    font-size: 32px;
    opacity: 0;

    &.animate{
      opacity:1;
      -webkit-transition: all 1250ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
         -moz-transition: all 750ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
          -ms-transition: all 750ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
           -o-transition: all 750ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
              transition: all 1250ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
      &:nth-of-type(1){
        transition-delay: 0.0s;	
      }
      &:nth-of-type(2){
        transition-delay: 0.03s;	   
      }
      &:nth-of-type(3){
        transition-delay: 0.06s;		
        
      }
      &:nth-of-type(4){
        transition-delay: 0.09s;		
        
      }
      &:nth-of-type(5){
        transition-delay: 0.12s;		
        
      }
      &:nth-of-type(6){
        transition-delay: 0.15s;	
            
      }
      &:nth-of-type(7){
        transition-delay: 0.18s;	
            
      }
      &:nth-of-type(8){
        transition-delay: 0.21s;	
            
      }
    }
  `}
`;

const NavLinks: React.FC<NavLinkProps> = ({
  animate,
  sections,
  clickHandler
}) => {
  useEffect(() => {
    if (animate) {
      const links = document.getElementsByClassName("mobile-navlink");
      for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("animate");
      }
    }
  }, []);

  return (
    <NavLinksContainer>
      {sections.map(section => (
        <NavLinkButton
          key={section}
          className="mobile-navlink"
          href={`#${section}`}
          onClick={() => clickHandler(`#${section}`)}
        >
          {section}
        </NavLinkButton>
      ))}
    </NavLinksContainer>
  );
};

export default NavLinks;
