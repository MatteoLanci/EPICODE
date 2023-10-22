import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Footer />
      </>
    );
  }
}

export default App;
