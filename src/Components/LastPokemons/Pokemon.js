import React from "react";
import styles from "./Pokemon.module.css";
import { API_POKEMON } from "../../api";

const Pokemon = ({ name }) => {
  const [pokemon, setPokemon] = React.useState({});

  React.useEffect(() => {
    async function loadPokemon() {
      try {
        const { url, options } = API_POKEMON(`${name}`);
        const response = await fetch(url, options);
        const json = await response.json();
        setPokemon(json);
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    }
    loadPokemon();
  }, [name]);

  if (!pokemon.sprites) return null;
  return (
    <div className={styles.pokemon}>
      <div>
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <span className={styles.nome}>{pokemon.name}</span>
    </div>
  );
};

export default Pokemon;
