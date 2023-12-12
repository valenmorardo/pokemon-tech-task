import catchedErrorAsync from '../utils/catchedErrorAsync.js';

import { getPokemones } from './getPokemones.controller.js';

const controller = {
	getPokemones: catchedErrorAsync(getPokemones),
};

export default controller;
