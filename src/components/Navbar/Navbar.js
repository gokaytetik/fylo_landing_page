import React from "react";
import "./navbar.scss";

//Assets
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navbar__menu">
            <div className="navbar__item">
              <a href="/">Features</a>
            </div>
            <div className="navbar__item">
              <a href="/">Team</a>
            </div>
            <div className="navbar__item">
              <a href="/">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
