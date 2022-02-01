import React from "react";
import MainCharacter from "./MainCharacter";

const Searchbar = (props) => {
  return (
    <article>
      <form className="character-one" onSubmit={props.handleCharacter}>
        <input
          type="search"
          placeholder="search anime character..."
          className="input-one"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </form>
      <div className="main-div">
        {props.animeCharacter.map((anime) => (
          <MainCharacter anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </article>
  );
};

export default Searchbar;
