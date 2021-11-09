import React from "react";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
//Style
import "./style/boilerplate.scss";
import "./style/global.scss";

//Components

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Features />
    </React.Fragment>
  );
}

export default App;
