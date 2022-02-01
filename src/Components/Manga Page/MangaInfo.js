import React from "react";

const MangaInfo = ({ anime }) => {
  return (
    <div className="space-btw">
      <a href={anime.url} target="_black" rel="noreferrer">
        <img src={anime.image_url} alt="img" className="anime-pics" />
      </a>
      <h3 className="anime-name">{anime.title}</h3>
    </div>
  );
};

export default MangaInfo;
