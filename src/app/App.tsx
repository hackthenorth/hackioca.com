import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { BobaProvider } from "src/utils/context/boba";

import NavBar from "src/components/NavBar";
import Hero from "src/app/sections/Hero";
import Schedule from "src/app/sections/Schedule";
import Judges from "src/app/sections/Judges";
import FAQ from "src/app/sections/FAQ";
import Sponsors from "src/app/sections/Sponsors";
import Prizes from "src/app/sections/Prizes";
import Activities from "src/app/sections/Activities";
import Workshops from "src/app/sections/Workshops";
import About from "src/app/sections/About";
import Style from "src/components/Style";
import ToolTip from "src/components/ToolTip";
import RouteNotFound from "src/app/sections/RouteNotFound";
import Footer from "src/app/sections/Footer";

const App: React.FC = () => (
  <BobaProvider>
    <Style />
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
);

export default App;
