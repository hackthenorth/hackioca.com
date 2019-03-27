import React from "react";
import { createGlobalStyle } from "styled-components";
import { BobaProvider } from "src/utils/context/boba";

import Schedule from "src/app/sections/Schedule";
import About from "src/app/sections/About";
import FAQ from "src/app/sections/FAQ";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Bubbleboddy";
    font-weight: 700;
    src: url("/fonts/Bubbleboddy-FatTrial.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 400;
    src: url("/fonts/Raleway-Light.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 500;
    src: url("/fonts/Raleway-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 600;
    src: url("/fonts/Raleway-Semibold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Raleway";
    font-weight: 700;
    src: url("/fonts/Raleway-Bold.ttf") format("truetype");
  }

  html {
    margin: 0;
    padding: 0;
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
    <About />
    <Schedule />
    <FAQ />
    <GlobalStyle />
  </BobaProvider>
);
export default App;
