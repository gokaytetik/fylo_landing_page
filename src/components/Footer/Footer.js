import React from "react";
import "./footer.scss";

import Logo from "../../assets/logo.svg";
import LocationIcon from "../../assets/icon-location.svg";
import PhoneIcon from "../../assets/icon-phone.svg";
import EmailIcon from "../../assets/icon-email.svg";
import GetStarted from "../GetStarted/GetStarted";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer__getStarted">
          <GetStarted />
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer__container">
          <div className="footer__left">
            <div className="footer__location">
              <div className="footer__location-icon">
                <img src={LocationIcon} alt="" />
              </div>
              <div className="footer__location-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
          </div>
          <div className="footer__contact">
            <div className="footer__phone">
              <img src={PhoneIcon} alt="" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="footer__mail">
              <img src={EmailIcon} alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="footer__menu">
            <div className="footer__menu-left">
              <div className="footer__menu-item">
                <a href="/">About Us</a>
              </div>
              <div className="footer__menu-item">
                <a href="/">Jobs</a>
              </div>
              <div className="footer__menu-item">
                <a href="/">Press</a>
              </div>
              <div className="footer__menu-item">
                <a href="/">Blog</a>
              </div>
            </div>
            <div className="footer__menu-right">
              <div className="footer__menu-item">
                <a href="/">Contact Us</a>
              </div>
              <div className="footer__menu-item">
                <a href="/">Terms</a>
              </div>
              <div className="footer__menu-item">
                <a href="/">Privacy</a>
              </div>
            </div>
          </div>
          <div className="footer__social">
            <button className="footer__button">
              <svg
                baseProfile="tiny"
                version="1.2"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189.374-2.691 1.118-3.512C11.862 4.41 12.791 4 13.904 4H16v3h-2.1c-.498 0-.9.402-.9.899V10z"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
              </svg>
            </button>
            <button className="footer__button">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 56.693 56.693"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.837 15.065a20.11 20.11 0 0 1-5.805 1.591 10.125 10.125 0 0 0 4.444-5.592 20.232 20.232 0 0 1-6.418 2.454 10.093 10.093 0 0 0-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 0 0-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 0 1-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 0 1-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 0 1-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0 0 15.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 0 0 5.042-5.23z"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
              </svg>
            </button>
            <button className="footer__button">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 600 600"
                xmSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
              >
                <path
                  d="M251.921.159c-68.418 0-76.997.29-103.867 1.516-26.814 1.224-45.127 5.482-61.152 11.71-16.566 6.438-30.615 15.052-44.62 29.057-14.005 14.005-22.619 28.054-29.057 44.62-6.228 16.024-10.486 34.337-11.71 61.151C.289 175.083 0 183.662 0 252.08c0 68.417.289 76.996 1.515 103.866 1.224 26.814 5.482 45.127 11.71 61.151 6.438 16.566 15.052 30.615 29.057 44.621 14.005 14.005 28.054 22.619 44.62 29.057 16.025 6.227 34.338 10.486 61.152 11.709 26.87 1.226 35.449 1.516 103.867 1.516 68.417 0 76.996-.29 103.866-1.516 26.814-1.223 45.127-5.482 61.151-11.709 16.566-6.438 30.615-15.052 44.621-29.057 14.005-14.006 22.619-28.055 29.057-44.621 6.227-16.024 10.486-34.337 11.709-61.151 1.226-26.87 1.516-35.449 1.516-103.866 0-68.418-.29-76.997-1.516-103.867-1.223-26.814-5.482-45.127-11.709-61.151-6.438-16.566-15.052-30.615-29.057-44.62-14.006-14.005-28.055-22.619-44.621-29.057-16.024-6.228-34.337-10.486-61.151-11.71C328.917.449 320.338.159 251.921.159Zm0 45.392c67.265 0 75.233.256 101.797 1.468 24.562 1.121 37.901 5.225 46.778 8.674 11.759 4.57 20.151 10.03 28.966 18.845 8.816 8.815 14.275 17.208 18.845 28.966 3.45 8.877 7.554 22.216 8.674 46.778 1.212 26.564 1.469 34.532 1.469 101.798 0 67.265-.257 75.233-1.469 101.797-1.12 24.562-5.224 37.901-8.674 46.778-4.57 11.759-10.029 20.151-18.845 28.966-8.815 8.816-17.207 14.275-28.966 18.845-8.877 3.45-22.216 7.554-46.778 8.674-26.56 1.212-34.527 1.469-101.797 1.469-67.271 0-75.237-.257-101.798-1.469-24.562-1.12-37.901-5.224-46.778-8.674-11.759-4.57-20.151-10.029-28.967-18.845-8.815-8.815-14.275-17.207-18.844-28.966-3.45-8.877-7.554-22.216-8.675-46.778-1.212-26.564-1.468-34.532-1.468-101.797 0-67.266.256-75.234 1.468-101.798 1.121-24.562 5.225-37.901 8.675-46.778 4.569-11.758 10.029-20.151 18.844-28.966 8.816-8.815 17.208-14.275 28.967-18.845 8.877-3.449 22.216-7.553 46.778-8.674 26.564-1.212 34.532-1.468 101.798-1.468Z"
                  transform="translate(44 43.838) scale(1.01619)"
                  fill-rule="nonzero"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
                <path
                  d="M251.921 336.053c-46.378 0-83.974-37.596-83.974-83.973 0-46.378 37.596-83.974 83.974-83.974 46.377 0 83.973 37.596 83.973 83.974 0 46.377-37.596 83.973-83.973 83.973Zm0-213.338c-71.447 0-129.365 57.918-129.365 129.365 0 71.446 57.918 129.364 129.365 129.364 71.446 0 129.364-57.918 129.364-129.364 0-71.447-57.918-129.365-129.364-129.365ZM416.627 117.604c0 16.696-13.535 30.23-30.231 30.23-16.695 0-30.23-13.534-30.23-30.23 0-16.696 13.535-30.23 30.23-30.23 16.696 0 30.231 13.534 30.231 30.23Z"
                  transform="translate(44 43.838) scale(1.01619)"
                  fill="#ffffff"
                  fill-rule="nonzero"
                  class="fill-030404"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
