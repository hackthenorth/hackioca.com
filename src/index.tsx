import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";

// Bugsnag
import bugsnag from "@bugsnag/js";
import bugsnagReact from "@bugsnag/plugin-react";

const bugsnagClient = bugsnag('9d3336190be1523df42e4d783418e856');
bugsnagClient.use(bugsnagReact, React);
const ErrorBoundary = bugsnagClient.getPlugin('react');

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById("root"));

registerServiceWorker();
