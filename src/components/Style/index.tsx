import React from "react";
import { createGlobalStyle } from "styled-components";
import { BobaContext } from "src/utils/context/boba";

import FontBubbleBoddy from "src/static/fonts/Bubbleboddy-FatTrial.ttf";
import FontRalewayLight from "src/static/fonts/Raleway-Light.ttf";
import FontRalewayRegular from "src/static/fonts/Raleway-Regular.ttf";
import FontRalewayMedium from "src/static/fonts/Raleway-Medium.ttf";
import FontRalewaySemibold from "src/static/fonts/Raleway-SemiBold.ttf";
import FontRalewayBold from "src/static/fonts/Raleway-Bold.ttf";

const BackgroundStyle = React.memo(() => (
  <BobaContext.Consumer>
    {({ flavor }) => {
      const gradients = {
        milk: "linear-gradient(180deg, #E5C49E 0%, #F7EEE3 100%)",
        matcha: "linear-gradient(180deg, #C8D170 0%, #EFF1D7 100%)",
        taro: "linear-gradient(180deg, #CF92B7 0%, #EDD7E4 100%)",
        mango: "linear-gradient(180deg, #F2C834 0%, #FBF0CB 100%)",
        strawberry: "linear-gradient(180deg, #ED6E6F 0%, #FAD7D7 100%)"
      };
      document.body.style.background = gradients[flavor];
      return null;
    }}
  </BobaContext.Consumer>
));

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Bubbleboddy";
    font-weight: 700;
    src: url(${FontBubbleBoddy}) format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 300;
    src: url(${FontRalewayLight}) format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 400;
    src: url(${FontRalewayRegular}) format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 500;
    src: url(${FontRalewayMedium}) format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 600;
    src: url(${FontRalewaySemibold}) format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 700;
    src: url(${FontRalewayBold}) format("truetype");
  }

  html {
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default React.memo(() => <>
  <GlobalStyle />
  <BackgroundStyle />
</>);

