import React from "react";
import Testimonial from "./Testimonial";
import { testimonials } from "../../data";
import "./testimonials.scss";

const Testimonials = () => {
  return (
    <React.Fragment>
      <div className="testimonials-wrapper">
        {testimonials.map((item) => (
          <Testimonial
            key={item.id}
            text={item.text}
            pic={item.pic}
            name={item.name}
            title={item.title}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
