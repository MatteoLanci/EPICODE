import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MyNav from "./components/navigationBar/MyNav";
import Welcome from "./components/MainContent/Welcome/Welcome";
import LatestReleases from "./components/MainContent/LatestReleases/LatestReleases";
import MyFooter from "./components/MyFooter/MyFooter";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        <LatestReleases />
        <MyFooter />
      </>
    );
  }
}

export default App;
