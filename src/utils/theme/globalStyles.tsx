import { createGlobalStyle } from "@hackthenorth/north";

import FontBubbleBoddy from "src/static/fonts/Bubbleboddy-FatTrial.ttf";
import FontRalewayLight from "src/static/fonts/Raleway-Light.ttf";
import FontRalewayRegular from "src/static/fonts/Raleway-Regular.ttf";
import FontRalewayMedium from "src/static/fonts/Raleway-Medium.ttf";
import FontRalewaySemibold from "src/static/fonts/Raleway-SemiBold.ttf";
import FontRalewayBold from "src/static/fonts/Raleway-Bold.ttf";

const globalStyles = createGlobalStyle`
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
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    padding-top: 60px;
  }
`;

export default globalStyles;
