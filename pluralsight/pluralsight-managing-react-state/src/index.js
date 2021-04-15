import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundry from './ErrorBoundry';

ReactDOM.render(<ErrorBoundry><App /></ErrorBoundry>, document.getElementById("root"));
