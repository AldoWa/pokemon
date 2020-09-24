import React from "react";

import "./App.css";

import Header from "./Components/Header/Header";
import Slide from "./Components/Slide/Slide";
import LastPokemons from "./Components/LastPokemons/LastPokemons";
import LastContent from "./Components/LastContent/LastContent";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Slide />
      <LastPokemons />
      <LastContent />
      <Footer />
    </>
  );
}

export default App;
