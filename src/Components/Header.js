import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo1 from "./Img/main-logo.png";

const Header = () => {
  let navigate = useNavigate();
  const logoClick = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <img src={Logo1} alt="logo" className="logo" onClick={logoClick} />
      <ul className="login">
        <li>
          <Link to="/login" className="register-links">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="register-links">
            SignUp
          </Link>
        </li>
        <li>
          <FaUserCircle className="user" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
