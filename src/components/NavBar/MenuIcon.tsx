import React from "react";
import styled from "styled-components";

import media from "src/utils/media";

interface CloseIconProps {
  isOpen: boolean;
  open(e: React.MouseEvent<HTMLElement>): void;
  close(e: React.MouseEvent<HTMLElement>): void;
}

const MenuContainer = styled.a`
  position: absolute;
  top: 20px;
  right: 24px;
  z-index: 12;
  cursor: pointer;
  width: 33px;
  height: 21px;

  ${media.tablet`
    top: 20px;
    right: 34px;
  `}
`;

const HamburgerLine = styled.div`
  position: absolute; margin: auto;
  top: 0px;	
  background: #fff;
  // border-radius:2px;
  height: 3px;
  width: 33px;
  -webkit-transition: all 400ms ease-out;
    -moz-transition: all 400ms ease-out;
      -ms-transition: all 400ms ease-out;
      -o-transition: all 400ms ease-out;
          transition: all 400ms ease-out;
  
  &.collapse{
    top: 10px;
    -webkit-transition: all 70ms ease-out;
        -moz-transition: all 70ms ease-out;
        -ms-transition: all 70ms ease-out;
          -o-transition: all 70ms ease-out;
            transition: all 70ms ease-out;
  }
  &.rotate30{
		-ms-transform: rotate(30deg); 
    	-webkit-transform: rotate(30deg); 
	    transform: rotate(30deg);	
		-webkit-transition: all 50ms ease-out;
		   -moz-transition: all 50ms ease-out;
		    -ms-transition: all 50ms ease-out;
		     -o-transition: all 50ms ease-out;
		        transition: all 50ms ease-out;					
	}
	&.rotate150{
		-ms-transform: rotate(150deg); 
    	-webkit-transform: rotate(150deg); 
	    transform: rotate(150deg);	
		-webkit-transition: all 50ms ease-out;
		   -moz-transition: all 50ms ease-out;
		    -ms-transition: all 50ms ease-out;
		     -o-transition: all 50ms ease-out;
		        transition: all 50ms ease-out;					
	}
	
	&.rotate45{
		-ms-transform: rotate(45deg); 
    	-webkit-transform: rotate(45deg); 
	    transform: rotate(45deg);	
		-webkit-transition: all 100ms ease-out;
		   -moz-transition: all 100ms ease-out;
		    -ms-transition: all 100ms ease-out;
		     -o-transition: all 100ms ease-out;
		        transition: all 100ms ease-out;					
	}
	&.rotate135{
		-ms-transform: rotate(135deg); 
    	-webkit-transform: rotate(135deg); 
	    transform: rotate(135deg);	
		-webkit-transition: all 100ms ease-out;
		   -moz-transition: all 100ms ease-out;
		    -ms-transition: all 100ms ease-out;
		     -o-transition: all 100ms ease-out;
		        transition: all 100ms ease-out;					
  }
  &.hide {
    display: none;
  }
`;

const Line1 = styled(HamburgerLine)`
  top: 0;
`;

const Line2 = styled(HamburgerLine)`
  top: 9px;
`;

const Line3 = styled(HamburgerLine)`
  top: 18px;
`;

const MenuIcon: React.FC<CloseIconProps> = ({ isOpen, open, close }) => {

  return (
    <MenuContainer onClick={e => { isOpen ? close(e) : open(e)}}>
      <Line1 className="line x" />
      <Line2 className="line y" />
      <Line3 className="line z" />
    </MenuContainer>
  );
}

export default React.memo(MenuIcon);
