import React from "react";
import Content from "./components/Content/Content";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
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
      <Content />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
}

export default App;
