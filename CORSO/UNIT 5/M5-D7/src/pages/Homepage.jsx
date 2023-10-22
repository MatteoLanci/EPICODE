import React from "react";

import MyNav from "../components/navigationBar/MyNav";
import Welcome from "../components/MainContent/Welcome/Welcome";
import LatestReleases from "../components/MainContent/LatestReleases/LatestReleases";
import MyFooter from "../components/MyFooter/MyFooter";

import { QueryProvider } from "../context/QueryContext";
import { ThemeProvider } from "../context/ThemeContext";
import { SelectedProvider } from "../context/SelectedContext";

const Homepage = () => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <SelectedProvider>
          <MyNav />
          <Welcome />
          <LatestReleases />
          <MyFooter />
        </SelectedProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default Homepage;
