import React from "react";
import "./testimonial.scss";

const Testimonial = ({ pic, name, title, text }) => {
  return (
    <React.Fragment>
      <div className="testimonial-wrapper">
        <div className="testimonial-card">
          <div className="testimonial-card__text">{text}</div>
          <div className="testimonial-card__footer">
            <div className="testimonial-card__pic">
              <img src={pic} alt="" />
            </div>
            <div className="testimonial-card__info">
              <div className="testimonial-card__name">{name}</div>
              <div className="testimonial-card__title">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
