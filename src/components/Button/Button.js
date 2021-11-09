import React from "react";
import "./button.scss";

const STYLES = ["btn--primary--solid", "btn--primary--outline"];

const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <React.Fragment>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;
