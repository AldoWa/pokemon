import React from "react";

import "./App.css";

import Header from "./Components/Header/Header";
import Slide from "./Components/Slide/Slide";
import LastPokemons from "./Components/LastPokemons/LastPokemons";

function App() {
  return (
    <div>
      <Header />
      <Slide />
      <LastPokemons />
    </div>
  );
}

export default App;
