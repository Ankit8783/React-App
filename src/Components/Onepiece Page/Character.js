import React, { useEffect, useState } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";

const Character = () => {
  const [animeCharacter, setAnimeCharacter] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCharacter = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/character?q=${query}&order_by=title&sort=asc&limit=20`
    ).then((res) => res.json());
    setAnimeCharacter(temp.results);
  };

  const handleCharacter = (e) => {
    e.preventDefault();
    fetchCharacter(search);
    setSearch("");
  };

  return (
    <div>
      <Header />
      <Searchbar
        search={search}
        setSearch={setSearch}
        handleCharacter={handleCharacter}
        animeCharacter={animeCharacter}
      />
    </div>
  );
};

export default Character;
