import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { SelectCategoryProvider } from "./context/SelectCategoryContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SelectCategoryProvider>
      <App />
    </SelectCategoryProvider>
  </React.StrictMode>
);
