import React from "react";
import HelloWorldTestState from "src/app/components/HelloWorldTestState";
import { BobaProvider } from "src/utils/context/boba";

const App: React.FC<{}> = () => (
  <BobaProvider>
      <HelloWorldTestState />
  </BobaProvider>
);

export default App;
