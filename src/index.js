import React from "react";
import ReactDOM from "react-dom/";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/globalstyle";
import { RegisterProvider } from "./Providers/Register";

ReactDOM.render(
  <React.StrictMode>
    <RegisterProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RegisterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
