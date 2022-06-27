import React from "react";
import ReactDOM from "react-dom/";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/globalstyle";
<<<<<<< HEAD
import { RegisterProvider } from "./Providers/Register";

ReactDOM.render(
  <React.StrictMode>
    <RegisterProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RegisterProvider>
=======
import Providers from "./Providers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
>>>>>>> 515e69e4f7f022262d3b485491af7d0848bf4536
  </React.StrictMode>,
  document.getElementById("root")
);
