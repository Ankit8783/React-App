import React from "react";
import loginImg from "../Img/loginimg.png";

const Login = () => {
  return (
    <div className="all-signup">
      <div className="signup-img">
        <img src={loginImg} alt="img" className="login-img" />
      </div>
      <div className="signup-container">
        <div className="signup-content">
          <h1 className="signup-head">Welcome Back</h1>
          <form
            action="https://formsubmit.co/ankitchandra8783@gmail.com"
            method="POST"
            className="signup-info"
          >
            <input
              type="email"
              placeholder="E-Mail"
              name="email"
              required
              className="signup-input"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New submission" />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              className="signup-input"
            />
            <div className="input-check">
              <input type="checkbox" className="signup-input sign-checkbox" />
              <span className="remember">Remember me</span>
            </div>
            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
