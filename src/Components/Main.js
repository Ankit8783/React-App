import React from "react";
// import AnimePic from "./animepics/one piece.jpg";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Main = ({ item }) => {
  let navigate = useNavigate();

  const animeInfo = () => {
    if (item.name === "One Piece") {
      navigate("/onepiece");
    } else if (item.name === "Bleach: Burichi") {
      navigate("/bleach");
    } else if (item.name === "Naruto") {
      navigate("/naruto");
    } else {
      navigate("/aot");
    }
  };

  return (
    <div className="top-picks" onClick={animeInfo}>
      <main>
        <div className="anime-img">
          <img src={item.image} alt="" className="anime-pic" />
        </div>
        <div className="anime-info">
          <div className="name-rating">
            <h2 className="main-heading">{item.name}</h2>
            <h3>
              <span className="lite-heading">IMDb RATING</span>
              <br />
              {item.rating}
              <AiFillStar className="star" />
            </h3>
          </div>
          <h3 className="content-title">
            <span className="lite-heading">Original title : </span>
            {item.title}
          </h3>
          <h3 className="content-title">
            <span className="lite-heading">TV Series : </span>
            {item.series}
          </h3>
          <h3 className="content-title">
            <span className="lite-heading">Manga : </span>
            {item.manga}
          </h3>
          <h3 className="content-title">
            <span className="lite-heading">Studio : </span>
            {item.studio}
          </h3>
          <p className="desc">{item.desc}</p>
        </div>
      </main>
    </div>
  );
};

export default Main;
