import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiToggles } from "react-icons/gi";
import About from "./Pages/About";
import { Link } from "react-router-dom";
import Home from "./Pages/Home";
import Manga from "./Pages/Manga";
import Community from "./Pages/Community";

const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);

  const toggleClick = () => {
    if (showToggle === false) {
      setShowToggle(true);
    } else {
      setShowToggle(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="toggle" onClick={toggleClick}>
        <GiToggles />
      </div>
      <div className={showToggle ? "navbar-links active" : "navbar-links"}>
        <ul>
          <li>
            <Link to="/" className="portal">
              Home
            </Link>
          </li>
          <li>
            <Link to="/manga" className="portal">
              Manga
            </Link>
          </li>
          <li>
            <Link to="/community" className="portal">
              Anime
            </Link>
          </li>

          <li>
            <Link to="/about" className="portal">
              About
            </Link>
          </li>
        </ul>
        <div className="searchbar">
          <input type="search" placeholder="Search for Anime....." />
          <button className="btn">
            <FaSearch className="nav-btn" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
