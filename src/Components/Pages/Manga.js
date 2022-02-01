import React, { useEffect, useState } from "react";
import Header from "../Manga Page/Header";
import MangaContent from "../Manga Page/MangaContent";

const Manga = () => {
  const [manga, setManga] = useState([]);
  const [search, setSearch] = useState("");

  const getManga = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=20`
    ).then((res) => res.json());

    setManga(temp.results);
  };

  const mangaSearch = (e) => {
    e.preventDefault();
    getManga(search);
    setSearch("");
  };

  return (
    <div>
      <Header />
      <div className="manga-page">
        <MangaContent
          search={search}
          setSearch={setSearch}
          mangaSearch={mangaSearch}
          manga={manga}
        />
      </div>
    </div>
  );
};

export default Manga;
