import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundry from './ErrorBoundry';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<ErrorBoundry>
    <BrowserRouter>
    <App /></BrowserRouter>
</ErrorBoundry>
, document.getElementById("root"));
