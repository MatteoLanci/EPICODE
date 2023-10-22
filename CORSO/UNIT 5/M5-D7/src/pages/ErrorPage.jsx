import React from "react";

import MyNav from "../components/navigationBar/MyNav";
import MyFooter from "../components/MyFooter/MyFooter";

import { QueryProvider } from "../context/QueryContext";
import { ThemeProvider } from "../context/ThemeContext";
import { SelectedProvider } from "../context/SelectedContext";
import {
  SelectCategoryContext,
  // SelectCategoryProvider,
} from "../context/SelectCategoryContext";

const ErrorPage = () => {
  return (
    <>
      <QueryProvider>
        <ThemeProvider>
          <SelectedProvider>
            <MyNav />
            <h1
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "70vh" }}
            >
              Qualcosa è andato storto nella tua ricerca
            </h1>
            <MyFooter />
          </SelectedProvider>
        </ThemeProvider>
      </QueryProvider>
    </>
  );
};

export default ErrorPage;
