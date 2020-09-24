export const API_DEFAULT_URL = "https://pokeapi.co/api/v2/";
export function API_POKEMON(nomePokemon) {
  return {
    url: API_DEFAULT_URL + `pokemon/${nomePokemon}`,
    options: {
      method: "GET",
    },
  };
}
