import React from "react";
import { AiFillStar } from "react-icons/ai";
import narutoBanner from "../Img/narutoBanner.png";
import narutoImg from "../Img/naruto.jpg";
import oneFolder from "../Img/onefolder.png";
// import devilFruits from "../Img/devil fruit.png";
import { useNavigate } from "react-router-dom";

const Naruto = () => {
  let navigate = useNavigate();

  const narutoCharacter = () => {
    navigate("/narutocharacter");
  };

  return (
    <div className="onepiece-banner">
      <img src={narutoBanner} alt="banner" className="banner-logo" />
      <div className="anime-page">
        <section>
          <div className="anime-img">
            <img src={narutoImg} alt="pic" className="anime-pic" />
          </div>
          <div className="anime-info">
            <div className="name-rating">
              <h2 className="main-heading">Naruto</h2>
              <h3>
                <span className="lite-heading">IMDb RATING</span>
                <br />
                8.3/10
                <AiFillStar className="star" />
              </h3>
            </div>
            <h3 className="content-title">
              <span className="lite-heading">Original title : </span>
              Naruto
            </h3>
            <h3 className="content-title">
              <span className="lite-heading">TV Series : </span>
              Fall 2002 - 2007
            </h3>
            <h3 className="content-title">
              <span className="lite-heading">Manga : </span>
              September 21,1999 - November 10, 2014
            </h3>
            <h3 className="content-title">
              <span className="lite-heading">Studio : </span>
              Studio Pierrot
            </h3>
            <p className="desc">
              Naruto Uzumaki, a mischievous adolescent ninja, struggles as he
              searches for recognitional dreams of becoming the Hokage,the
              village's leader and strongest ninja
            </p>
          </div>
        </section>
        <div className="characters" onClick={narutoCharacter}>
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

export default Naruto;
