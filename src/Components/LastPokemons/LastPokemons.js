import React from "react";
import Pokemon from "./Pokemon";

import styles from "./LastPokemons.module.css";

const LastPokemons = () => {
  return (
    <section className={`${styles.section} container`}>
      <h4 className="formatedSubTitle">Últimos pokemos</h4>
      <div className={styles.pokemonArea}>
        <Pokemon type={1} name={"charizard"} />
        <Pokemon type={1} name={"mewtwo"} />
        <Pokemon type={1} name={"ditto"} />
        <Pokemon type={1} name={"gengar"} />
        <Pokemon type={1} name={"dragonite"} />
        <Pokemon type={1} name={"pikachu"} />
      </div>
    </section>
  );
};

export default LastPokemons;
