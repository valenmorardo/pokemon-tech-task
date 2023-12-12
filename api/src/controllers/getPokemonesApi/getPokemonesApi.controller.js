import axios from 'axios'
import { urlPokemonData, myQuery } from '../../libs/constants.js';


export const getPokemonesApi = async (req, res) => {

	let randomNum = Math.floor(Math.random() * 4) + 1;

	const query = myQuery(randomNum)
	const result = await axios.post(urlPokemonData, {
		query: query
	});
	

	res.status(200).send(result.data)
};
