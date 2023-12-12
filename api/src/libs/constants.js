const urlPokemonData = 'https://beta.pokeapi.co/graphql/v1beta';

const myQuery = (randomNum) => {
	const props = [
		{ prop: 'name', num: 1 },
		{ prop: 'base_experience', num: 2 },
		{ prop: 'height', num: 3 },
		{ prop: 'weight', num: 4 },
	];

	const selectedProp = props.find((item) => item.num === randomNum);

	const myQuery = `
query MyQuery {
    pokemon_v2_pokemon(limit: 40, order_by: {${selectedProp.prop}: asc}) {
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
	return myQuery;
};


export { urlPokemonData, myQuery };
