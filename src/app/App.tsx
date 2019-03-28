import React from "react";
import { createGlobalStyle } from "styled-components";
import { BobaProvider } from "src/utils/context/boba";

import FontBubbleBoddy from "src/static/fonts/Bubbleboddy-FatTrial.ttf";
import FontRalewayLight from "src/static/fonts/Raleway-Light.ttf";
import FontRalewayRegular from "src/static/fonts/Raleway-Regular.ttf";
import FontRalewayMedium from "src/static/fonts/Raleway-Medium.ttf";
import FontRalewaySemibold from "src/static/fonts/Raleway-SemiBold.ttf";
import FontRalewayBold from "src/static/fonts/Raleway-Bold.ttf";

import Hero from "src/app/sections/Hero";
import Schedule from "src/app/sections/Schedule";
import Judges from "src/app/sections/Judges";
import About from "src/app/sections/About";
import FAQ from "src/app/sections/FAQ";
import Prizes from "src/app/sections/Prizes";

const GlobalStyles = createGlobalStyle`
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
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    background: linear-gradient(180deg, #E5C49E 0%, #FFFFFF 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
  }
`;

const App: React.FC = () => (
  <BobaProvider>
    <GlobalStyles />

    <Hero />
    <About />
    <Schedule />
    <Judges />
    <Prizes />
    <FAQ />
  </BobaProvider>
);

export default App;
