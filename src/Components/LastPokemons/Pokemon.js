import React from "react";
import styles from "./Pokemon.module.css";
import { API_POKEMON } from "../../api";

const Pokemon = ({ name, type }) => {
  const [pokemon, setPokemon] = React.useState({});

  React.useEffect(() => {
    async function loadPokemon() {
      try {
        const { url, options } = API_POKEMON(`${name}`);
        const response = await fetch(url, options);
        const json = await response.json();
        setPokemon(json);
      } catch (err) {
        console.log(err);
      }
    }
    loadPokemon();
  }, [name]);

  if (!pokemon.sprites) return null;
  else if (type === 1) {
    return (
      <div className={styles.pokemon}>
        <div>
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <span className={styles.nome}>{pokemon.name}</span>
      </div>
    );
  } else
    return (
      <div className={styles.newPokemonArea}>
        <h4 className="formatedSubTitle">{pokemon.name}</h4>
        <div className={styles.pokemonOtherArea}>
          <div>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Pokemon;
