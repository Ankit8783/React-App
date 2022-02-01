import React from "react";
import Banner from "../Banner";
import Main from "../Main";
import Data from "../Data";

const Home = () => {
  const newElement = Data.map((item) => <Main key={item.id} item={item} />);
  return (
    <div>
      <Banner />
      <h1 className="picks">Top Picks</h1>
      <div className="home">{newElement}</div>
    </div>
  );
};

export default Home;
