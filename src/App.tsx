import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { North } from "@hackthenorth/north";

import { BobaProvider } from "src/contexts/boba";
import themeDef from "src/theme";

import NavBar from "src/components/NavBar";
import Hero from "src/sections/Hero";
import Schedule from "src/sections/Schedule";
import Judges from "src/sections/Judges";
import FAQ from "src/sections/FAQ";
import Sponsors from "src/sections/Sponsors";
import Prizes from "src/sections/Prizes";
import Activities from "src/sections/Activities";
import Workshops from "src/sections/Workshops";
import About from "src/sections/About";
import BackgroundStyle from "src/components/BackgroundStyle";
import ToolTip from "src/components/ToolTip";
import RouteNotFound from "src/sections/RouteNotFound";
import Footer from "src/sections/Footer";

const App: React.FC = () => (
  <North themeDefinition={themeDef}>
    <BobaProvider>
      <BackgroundStyle />
      <ToolTip type="light" />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <QueryParamProvider ReactRouterRoute={Route}>
                <NavBar />
                <Hero />
                <About />
                <Schedule />
                <Judges />
                <Workshops />
                <Activities />
                <Sponsors />
                <Prizes />
                <FAQ />
                <Footer />
              </QueryParamProvider>
            )}
          />
          <Route component={RouteNotFound} />
        </Switch>
      </Router>
    </BobaProvider>
  </North>
);

export default App;
