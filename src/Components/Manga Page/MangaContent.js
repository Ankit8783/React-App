import React from "react";
import MangaInfo from "./MangaInfo";
import searchImg from "../Img/searchimg.png";

const MangaContent = (props) => {
  return (
    <aside>
      <div className="anime-search">
        <form onSubmit={props.mangaSearch} className="form">
          <img src={searchImg} alt="img" className="search-img" />
          <input
            type="search"
            placeholder="search for manga..."
            className="anm-se"
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
        <div className="anime-details">
          {props.manga.map((anime) => (
            <MangaInfo anime={anime} key={anime.mal_id} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MangaContent;
