import React from "react";
import { createGlobalStyle } from "styled-components";
import { BobaProvider } from "src/utils/context/boba";

import FontBubbleBoddy from "src/static/fonts/Bubbleboddy-FatTrial.ttf";
import Raleway from "src/static/fonts/Raleway-Light.ttf";

import Hero from "src/app/sections/Hero";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Bubbleboddy";
    font-weight: 700;
    src: url(${FontBubbleBoddy}) format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 400;
    src: url(${Raleway}) format("truetype");
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
  </BobaProvider>
);

export default App;
