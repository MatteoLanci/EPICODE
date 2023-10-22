import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import { CanvassProvider } from "./context/CanvassContext";
import { SelectedAuthorProvider } from "./context/SelectedAuthorContext";
import { ThemeProvider } from "./context/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SelectedAuthorProvider>
        <CanvassProvider>
          <App />
        </CanvassProvider>
      </SelectedAuthorProvider>
    </ThemeProvider>
  </React.StrictMode>
);
