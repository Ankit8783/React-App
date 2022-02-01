import React from "react";
import { AiFillStar } from "react-icons/ai";
import bleachBanner from "../Img/bleachbanner.png";
import bleachImg from "../Img/bleach.jpg";
import oneFolder from "../Img/onefolder.png";
// import devilFruits from "../Img/devil fruit.png";
import { useNavigate } from "react-router-dom";

const Bleach = () => {
  let navigate = useNavigate();

  const bleachCharacter = () => {
    navigate("/bleachcharacter");
  };

  return (
    <div className="onepiece-banner">
      <img src={bleachBanner} alt="banner" className="banner-logo" />
      <div className="anime-page">
        <section>
          <div className="anime-img">
            <img src={bleachImg} alt="pic" className="anime-pic" />
          </div>
          <div className="anime-info">
            <div className="name-rating">
              <h2 className="main-heading">Bleach</h2>
              <h3>
                <span className="lite-heading">IMDb RATING</span>
                <br />
                8.2/10
                <AiFillStar className="star" />
              </h3>
            </div>
            <h3 className="content-title">
              <span className="lite-heading">Original title : </span>
              Bleach: Burichi
            </h3>
            <h3 className="content-title">
              <span className="lite-heading">TV Series : </span>
              Fall 2004 - 2012
            </h3>
            <h3 className="content-title">
              <span className="lite-heading">Manga : </span>
              August 07,2001 - August 22,2016
            </h3>
            <h3 className="content-title">
              <span className="lite-heading">Studio : </span>
              Studio Pierrot
            </h3>
            <p className="desc">
              High school student Ichigo Kurosaki,who has the ability to see
              ghosts,gains soul reaper power from Rukia Kuchiki and sets out to
              save the world from 'Hollows'.
            </p>
          </div>
        </section>
        <div className="characters" onClick={bleachCharacter}>
          <img src={oneFolder} alt="icon" className="folder" />
          <h2 className="character">
            Char<span className="span">a</span>cters
          </h2>
        </div>
        {/* <div className="devil-fruits">
          <img src={devilFruits} alt="df" className="df" />
        </div> */}
      </div>
    </div>
  );
};

export default Bleach;
