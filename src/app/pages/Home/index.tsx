import * as React from "react";
import { QueryParamProvider } from "use-query-params";
import { Route } from 'react-router';

const NavBar = React.lazy(() => import("src/components/NavBar"));
const Hero = React.lazy(() => import("src/app/sections/Hero"));
const Schedule = React.lazy(() => import("src/app/sections/Schedule"));
const Judges = React.lazy(() => import("src/app/sections/Judges"));
const FAQ = React.lazy(() => import("src/app/sections/FAQ"));
const Sponsors = React.lazy(() => import("src/app/sections/Sponsors"));
const Prizes = React.lazy(() => import("src/app/sections/Prizes"));
const Activities = React.lazy(() => import("src/app/sections/Activities"));
const Workshops = React.lazy(() => import("src/app/sections/Workshops"));
const About = React.lazy(() => import("src/app/sections/About"));
const Footer = React.lazy(() => import("src/app/sections/Footer"));

const Home: React.FC = () => (
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
);

export default Home;
