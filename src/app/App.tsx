import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { North } from "@hackthenorth/north";

import { BobaProvider } from "src/utils/context/boba";
import themeDef from "src/utils/theme";

import BackgroundStyle from "src/components/BackgroundStyle";
import ToolTip from "src/components/ToolTip";
const Home = React.lazy(() => import('src/app/pages/Home'));
const RouteNotFound = React.lazy(() => import("src/app/sections/RouteNotFound"));

const App: React.FC = () => (
  <North themeDefinition={themeDef}>
    <BobaProvider>
      <BackgroundStyle />
      <ToolTip type="light" />
      <Router>
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={RouteNotFound} />
          </Switch>
        </Suspense>
      </Router>
    </BobaProvider>
  </North>
);

export default App;
