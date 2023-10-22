import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import { CanvassProvider } from "./context/CanvassContext";
import { SelectedAuthorProvider } from "./context/SelectedAuthorContext";
import { ThemeProvider } from "./context/themeContext";
import { SelectedBlogPostProvider } from "./context/SelectedBlogPostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SelectedBlogPostProvider>
        <SelectedAuthorProvider>
          <CanvassProvider>
            <App />
          </CanvassProvider>
        </SelectedAuthorProvider>
      </SelectedBlogPostProvider>
    </ThemeProvider>
  </React.StrictMode>
);
