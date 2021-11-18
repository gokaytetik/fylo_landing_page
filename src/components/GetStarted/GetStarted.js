import React from "react";
import Button from "../Button/Button";
import "./getStarted.scss";

const GetStarted = () => {
  return (
    <React.Fragment>
      <div className="getStarted">
        <div className="getStarted__header"> Get early access today</div>
        <div className="getStarted__text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </div>
        <div className="getStarted__footer">
          <input type="text" placeholder="email@example.com" name="name" />
          <div className="getStarted__button">
            <Button
              type="button"
              buttonStyle="btn--primary--solid"
              buttonSize="btn--medium"
            >
              Get Started For Free
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GetStarted;
