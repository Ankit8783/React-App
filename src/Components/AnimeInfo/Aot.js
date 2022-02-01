import React from "react";
import { AiFillStar } from "react-icons/ai";
import aotBanner from "../Img/aotbanner.jpeg";
import aotImg from "../Img/aot.jpg";
import oneFolder from "../Img/onefolder.png";
// import devilFruits from "../Img/devil fruit.png";
import { useNavigate } from "react-router-dom";

const Aot = () => {
  let navigate = useNavigate();
  const aotCharacter = () => {
    navigate("/aotcharacter");
  };
  return (
    <div className="onepiece-banner">
      <img src={aotBanner} alt="banner" className="banner-logo" />
      <div className="anime-page">
        <section>
          <div className="anime-img">
            <img src={aotImg} alt="pic" className="anime-pic" />
          </div>
          <div className="anime-info">
            <div className="name-rating">
              <h2 className="main-heading">Attack on titan</h2>
              <h3>
                <span className="lite-heading">IMDb RATING</span>
                <br />
                8.8/10
                <AiFillStar className="star" />
              </h3>
            </div>
            <h3 className="content-title">
              <span className="lite-heading">Original title : </span>
              Shingeki no Kyojin
            </h3>
            <h3 className="content-title">
              <span className="lite-heading">TV Series : </span>
              2013 - 2022
            </h3>
            <h3 className="content-title">
              <span className="lite-heading">Manga : </span>
              September 9,2009 - April 9,2021
            </h3>
            <h3 className="content-title">
              <span className="lite-heading">Studio : </span>
              Wit Studio (Mappa)
            </h3>
            <p className="desc">
              After his hometown is destroyed and his mother is killed, young
              Eren Jeager vows to cleans the earth of the gaint humanoid Titans
              that have brought humanity to the brink of extinction
            </p>
          </div>
        </section>
        <div className="characters" onClick={aotCharacter}>
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

export default Aot;
