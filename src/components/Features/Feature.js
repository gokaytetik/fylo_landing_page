import React from "react";
import "./feature.scss";

//Assets
import Access from "../../assets/icon-access-anywhere.svg";

const Feature = ({ img, header, content }) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__img">
          <img src={Access} alt="icon" />
        </div>
        <div className="card__header">{header}</div>
        <div className="card__content">{content}</div>
      </div>
    </React.Fragment>
  );
};

export default Feature;
