import axios from 'axios';
const pokemonesLocalData = require('../../libs/dataLocalPokemones.json');
export const getPokemonesLocalData = async (req, res) => {
	function shuffle(pokemones) {
		for (let i = pokemones.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[pokemones[i], pokemones[j]] = [pokemones[j], pokemones[i]];
		}
		return pokemones;
	}

	const pokemonesOrderRandom = shuffle(pokemonesLocalData);

	res.status(200).send({
		data: {
			pokemon_v2_pokemon: pokemonesOrderRandom,
		},
	});
};
