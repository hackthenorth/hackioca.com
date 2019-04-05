import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Bugsnag
import bugsnag from "@bugsnag/js";
import bugsnagReact from "@bugsnag/plugin-react";

const bugsnagClient = bugsnag("9d3336190be1523df42e4d783418e856");
bugsnagClient.use(bugsnagReact, React);
const ErrorBoundary =
  process.env.NODE_ENV === "production"
    ? bugsnagClient.getPlugin("react")
    : React.Fragment;

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);

registerServiceWorker();
