import { Router } from 'express';
import controller from '../controllers/index.controllers.js';

import errorHandler from '../controllers/errorHandler.js';

const router = Router();

router.get('/pokemones', controller.getPokemones);
router.use(errorHandler);

export default router;
