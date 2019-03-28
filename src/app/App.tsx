import React from "react";
import { BobaProvider } from "src/utils/context/boba";

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

const App: React.FC = () => (
  <BobaProvider>
    <Hero />
    <About />
    <Schedule />
    <Judges />
    <Workshops />
    <Sponsors />
    <Prizes />
    <Activities />
    <FAQ />
    <Style />
  </BobaProvider>
);

export default App;
