import React from "react";
import BannerImg from "./Img/banner.jpg";
import { FaSearch } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImg} alt="banner" className="bannerImg" />
      <h1 className="main-lines">
        Welcome to
        <br />
        ani<span className="span">p</span>edia
      </h1>
      <p className="thoughts">
        Maybe nothing in this world happens by accident, As everything happens
        for a reason, our destiny slowly takes form...
      </p>
      {/* <div className="banner-search">
        <input type="search" placeholder="Search...." className="search-bar" />
        <button className="banner-btn">
          <FaSearch className="banner-search-btn" />
        </button>
      </div> */}
    </div>
  );
};

export default Banner;
