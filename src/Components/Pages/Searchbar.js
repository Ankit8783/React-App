import React from "react";
import MainContent from "./MainContent";
import searchImg from "../Img/searchimg.png";

const Searchbar = (props) => {
  return (
    <div className="anime-search">
      <form onSubmit={props.handleSearch} className="form">
        <img src={searchImg} alt="img" className="search-img" />
        <input
          type="search"
          placeholder="search for an anime"
          className="anm-se"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </form>
      <div className="anime-details">
        {props.animeList.map((anime) => (
          <MainContent anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
