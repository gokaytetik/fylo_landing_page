import React from "react";
import "./feature.scss";

const Feature = ({ img, header, content }) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__img">{img}</div>
        <div className="card__header">{header}</div>
        <div className="card__content">{content}</div>
      </div>
    </React.Fragment>
  );
};

export default Feature;
