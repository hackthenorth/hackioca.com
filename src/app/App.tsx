import React from "react";
import { SiteContextProvider } from 'src/utils/context';

import HelloWorld from "./components/helloworld";

const App = () => (
  <SiteContextProvider>
      <HelloWorld />
  </SiteContextProvider>
);


export default App;
