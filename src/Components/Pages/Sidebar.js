import React from "react";

const Sidebar = ({ topAnime }) => {
  return (
    <div className="anime-sidebar">
      <h3 className="top-anime">Top Anime</h3>
      {topAnime.map((anime) => (
        <a
          href={anime.url}
          target="_blank"
          rel="noreferrer"
          key={anime.mal_id}
          className="anime-title"
        >
          {anime.title}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
