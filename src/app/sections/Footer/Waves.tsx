import React from "react";
import styled from "styled-components";
// import Title from "src/components/Title";
// import Body from "src/components/Body";
// import SocialLinks from "src/components/NavBar/SocialLinks";
// import copy from "src/copy";

// import media from "src/utils/media";
import { BobaContext } from "src/utils/context/boba";

const footerBgs = [
  {
    flavor: "milk",
    image: "/images/footer/footer_milktea.svg"
  },
  {
    flavor: "matcha",
    image: "/images/footer/footer_matcha.svg"
  },
  {
    flavor: "taro",
    image: "/images/footer/footer_taro.svg"
  },
  {
    flavor: "mango",
    image: "/images/footer/footer_mango.svg"
  },
  {
    flavor: "strawberry",
    image: "/images/footer/footer_strawberry.svg"
  }
];

const Background = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

// interface FooterBgProps {
//   flavor: string;
//   image: string;
// }

const Waves = () => (
  <BobaContext.Consumer>
    {({ flavor }) => {
      return (
        <div>
          {footerBgs.map(({ flavor: bgFlavor, image }: any) => (
            <Background
              src={image}
              key={bgFlavor}
              style={{ visibility: flavor === bgFlavor ? "visible" : "hidden" }}
            />
          ))}
        </div>
      );
    }}
  </BobaContext.Consumer>

);

export default Waves;
