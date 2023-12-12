import axios from 'axios'
import { urlPokemonData, query } from '../libs/constants.js';


export const getPokemones = async (req, res) => {
	const result = await axios.post(urlPokemonData, {
		query,
	});

	res.json(result.data)
};