import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Manga from "./Components/Pages/Manga";
import Community from "./Components/Pages/Community";
import About from "./Components/Pages/About";
import Error from "./Components/Pages/Error";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import OnePiece from "./Components/AnimeInfo/OnePiece";
import Bleach from "./Components/AnimeInfo/Bleach";
import Naruto from "./Components/AnimeInfo/Naruto";
import Aot from "./Components/AnimeInfo/Aot";
import Character from "./Components/Onepiece Page/Character";
import DevilFruit from "./Components/Onepiece Page/DevilFruit";
import BleachCharacter from "./Components/Bleach Page/BleachCharacter";
import NarutoCharacter from "./Components/Naruto Page/NarutoCharacter";
import AotCharacter from "./Components/Aot Page/AotCharacter";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/manga" element={<Manga />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/onepiece" element={<OnePiece />} />
          <Route exact path="/bleach" element={<Bleach />} />
          <Route exact path="/naruto" element={<Naruto />} />
          <Route exact path="/aot" element={<Aot />} />
          <Route exact path="/character" element={<Character />} />
          <Route exact path="/devilfruit" element={<DevilFruit />} />
          <Route exact path="/bleachcharacter" element={<BleachCharacter />} />
          <Route exact path="/narutocharacter" element={<NarutoCharacter />} />
          <Route exact path="/aotcharacter" element={<AotCharacter />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
