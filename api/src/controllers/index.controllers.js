import catchedErrorAsync from '../utils/catchedErrorAsync.js';

import { getPokemonesApi } from './getPokemonesApi/getPokemonesApi.controller.js';
import { getPokemonesLocalData } from './getPokemonesLocal/getPokemonesLocal.controller.js';

const controller = {
	getPokemones: catchedErrorAsync(getPokemonesApi),
	getPokemonesLocalData: catchedErrorAsync(getPokemonesLocalData)
};

export default controller;
