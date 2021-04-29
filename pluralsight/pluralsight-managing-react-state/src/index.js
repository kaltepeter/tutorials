import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundry from './ErrorBoundry';
import { BrowserRouter } from 'react-router-dom';
import {CartProvider} from './cartContext';

ReactDOM.render(
<ErrorBoundry>
    <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
</ErrorBoundry>
, document.getElementById("root"));
