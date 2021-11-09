import React from "react";
import Button from "../Button/Button";
import "./header.scss";
import HeaderImg from "../../assets/illustration-intro.png";

const Header = () => {
  return (
    <React.Fragment>
      <div className="content">
        <div className="content__image">
          <img src={HeaderImg} alt="illustration" />
        </div>
        <div className="content__title">
          All your files in one secure location, accessible anywhere.
        </div>
        <div className="content__text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </div>
        <Button
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Header;
