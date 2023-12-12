const urlPokemonData = 'https://beta.pokeapi.co/graphql/v1beta';

const query = `
query MyQuery {
    pokemon_v2_pokemon {
      id
      name
      base_experience
      height
      weight
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          id
          name
        }
      }
    }
  }
`;

export {
    urlPokemonData,
    query,
}