import { Router } from 'express';

import * as controller from '../controllers/allControllers.js'

const router = Router();

router.get('/pokemones', controller.getPokemones);

export default router;
