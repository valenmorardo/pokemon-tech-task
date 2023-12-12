import axios from 'axios';
const pokemonesLocalData = require('../../libs/dataLocalPokemones.json')
export const getPokemonesLocalData = async (req, res) => {
	
	res.status(200).send(pokemonesLocalData);
};
