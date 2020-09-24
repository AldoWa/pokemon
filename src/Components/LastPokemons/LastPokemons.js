import React from "react";
import Pokemon from "./Pokemon";

import styles from "./LastPokemons.module.css";

const LastPokemons = () => {
  return (
    <section className={`${styles.section} container`}>
      <h4>Últimos pokemos</h4>
      <div className={styles.pokemonArea}>
        <Pokemon name={"charizard"} />
        <Pokemon name={"mewtwo"} />
        <Pokemon name={"ditto"} />
        <Pokemon name={"gengar"} />
        <Pokemon name={"dragonite"} />
        <Pokemon name={"pikachu"} />
      </div>
    </section>
  );
};

export default LastPokemons;
