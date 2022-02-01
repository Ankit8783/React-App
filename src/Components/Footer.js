import React from "react";
import Google from "./icon/play-store.png";
import appStore from "./icon/app-store.png";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="allfooter-links">
      <div className="footer-container">
        <div className="footer-icon">
          <h2 className="footer-h1">Download Our App</h2>
          <h3 className="footer-h3">
            Download App for Android
            <br />
            and ios mobile phone
          </h3>
          <div className="download-links">
            <img src={Google} alt="google" className="icon" />
            <img src={appStore} alt="google" className="icon" />
          </div>
        </div>
        <div className="quote">
          <h3 className="quote-text">
            Wake up to reality ! nothing ever goes as planned in this world.the
            longer you live the more you realize that in this reality only pain,
            suffering and futility exist
          </h3>
          <h4 className="actor-name">
            <span className="span">MADARA UCHIHA</span>
          </h4>
        </div>
        <div className="follow">
          <ul>
            <li>
              <a href="#">
                <FaFacebookSquare className="social-links" />
                Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare className="social-links" />
                Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare className="social-links" />
                Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutubeSquare className="social-links" />
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="line"></div>
        <h3 className="copyright">
          Anipedia is a property of A&R co.,Ltd. &copy; 2022 All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
