import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";
import loginImg from "../Img/loginimg.png";

const SignUp = () => {
  return (
    <div className="all-signup">
      <div className="signup-img">
        <img src={loginImg} alt="img" className="login-img" />
      </div>
      <div className="signup-container">
        {/* <div className="signup-img"></div> */}
        <div className="signup-content">
          <h1 className="signup-head">Create Account</h1>
          <form
            action="https://formsubmit.co/ankitchandra8783@gmail.com"
            method="POST"
            className="signup-info"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="signup-input"
              required
              name="your name"
            />
            <input
              type="email"
              placeholder="E-Mail"
              required
              name="email"
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
              required
              name="password"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New submission" />
            {/* <div className="input-check">
              <input type="checkbox" className="signup-input sign-checkbox" />
              <span className="remember">Remember me</span>
            </div> */}
            <button type="submit" className="login-btn">
              Sign up
            </button>
          </form>
          <div className="signup-social-link">
            <h3 className="login-with">Or Login with</h3>
            <FaFacebookSquare className="signup-links facebook" />
            <FaTwitterSquare className="signup-links twitter" />
            <AiFillGoogleSquare className="signup-links google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
