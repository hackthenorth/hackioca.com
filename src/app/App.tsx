import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
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
import FAQ from "src/app/sections/FAQ";
import Sponsors from "src/app/sections/Sponsors";
import Prizes from "src/app/sections/Prizes";
import Activities from "src/app/sections/Activities";
import Workshops from "src/app/sections/Workshops";
import About from "src/app/sections/About";
import RouteNotFound from "src/app/sections/RouteNotFound";

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
      <Router>
          <Switch>
              <Route
                  exact
                  path="/"
                  render={() => (
                      <QueryParamProvider ReactRouterRoute={Route}>
                          
              <Hero />
              <About />
              <Schedule />
              <Judges />
              <Workshops />
              <Activities />
              <Sponsors />
              <Prizes />
              <FAQ />
            </QueryParamProvider>
          )}
        />
        <Route component={RouteNotFound} />
      </Switch>
    </Router>
  </BobaProvider>
);

export default App;
