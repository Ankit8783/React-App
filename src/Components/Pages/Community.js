import React, { useEffect, useState } from "react";
import AnimeDatabase from "./AnimeDatabase";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

const Community = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 5));
  };
  // console.log(topAnime);

  useEffect(() => {
    getTopAnime();
  }, []);

  const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=20`
    ).then((res) => res.json());

    // console.log(temp.results);
    setAnimeList(temp.results);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
    setSearch("");
  };

  return (
    <>
      <AnimeDatabase />
      <div className="app">
        <Sidebar topAnime={topAnime} />
        <Searchbar
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </>
  );
};

export default Community;
