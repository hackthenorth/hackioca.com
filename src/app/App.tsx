import React from "react";
import { SiteContextProvider } from 'src/utils/siteContext';


const App = () => (
  <SiteContextProvider>
      <div className="App">Hello World!</div>
  </SiteContextProvider>
);


export default App;
