import React from "react";

const MainCharacter = ({ anime }) => {
  return (
    <div>
      <a href={anime.url} target="_blank" rel="noreffere">
        <img src={anime.image_url} alt="img" className="pic-one" />
      </a>
    </div>
  );
};

export default MainCharacter;
