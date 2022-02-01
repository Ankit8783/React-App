import React from "react";
import oneBanner from "../Img/onebanner.jpg";
import oneImg from "../Img/ONE P.jpg";
import { AiFillStar } from "react-icons/ai";
import oneFolder from "../Img/onefolder.png";
import devilFruits from "../Img/df.jpg";
import { useNavigate } from "react-router-dom";

const OnePiece = () => {
  let navigate = useNavigate();
  const character = () => {
    navigate("/character");
  };
  const fruit = () => {
    navigate("/devilfruit");
  };
  return (
    <>
      <div className="onepiece-banner">
        <img src={oneBanner} alt="banner" className="banner-logo" />
        <div className="anime-page">
          <section>
            <div className="anime-img">
              <img src={oneImg} alt="pics" className="anime-pic" />
            </div>
            <div className="anime-info">
              <div className="name-rating">
                <h2 className="main-heading">One Piece</h2>
                <h3>
                  <span className="lite-heading">IMDb RATING</span>
                  <br />
                  8.8/10
                  <AiFillStar className="star" />
                </h3>
              </div>
              <h3 className="content-title">
                <span className="lite-heading">Original title : </span>
                One Piece: Wan pisu
              </h3>
              <h3 className="content-title">
                <span className="lite-heading">TV Series : </span>
                Fall 1999 - Present
              </h3>
              <h3 className="content-title">
                <span className="lite-heading">Manga : </span>
                July 22,1997 - Present
              </h3>
              <h3 className="content-title">
                <span className="lite-heading">Studio : </span>
                Toei Animation
              </h3>
              <p className="desc">
                Follows the adventures of Monkey D. Luffy and his crew in order
                to find the greatest treasure ever left by the legendry
                Pirates,Gold Roger.The famous mystery treasure named 'One
                Piece'.
              </p>
            </div>
          </section>
          <div className="characters" onClick={character}>
            <img src={oneFolder} alt="icon" className="folder" />
            <h2 className="character">
              Char<span className="span">a</span>cters
            </h2>
          </div>
          {/* <div className="devil-fruits" onClick={fruit}>
            <img src={devilFruits} alt="df" className="df" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OnePiece;
