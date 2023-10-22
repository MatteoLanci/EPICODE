import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { SelectCategoryProvider } from "./context/SelectCategoryContext";
import { ThemeProvider } from "./context/ThemeContext";
import { SelectedProvider } from "./context/SelectedContext";
import { OffCanvassProvider } from "./context/OffCanvassContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SelectCategoryProvider>
      <ThemeProvider>
        <SelectedProvider>
          <OffCanvassProvider>
            <App />
          </OffCanvassProvider>
        </SelectedProvider>
      </ThemeProvider>
    </SelectCategoryProvider>
  </React.StrictMode>
);
