import React from "react";
import Feature from "./Feature";
import { features } from "../../data";
import "./features.scss";

const Features = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        {features.map((item) => (
          <Feature
            key={item.id}
            img={item.img}
            header={item.header}
            content={item.content}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Features;
