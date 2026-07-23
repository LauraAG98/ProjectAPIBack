import { getControllerLocations, getControllerLocationById, getControllerLocationByIds } from '../controllers/locations.controller.js';
import express from 'express';
import { logger } from '../middlewares/logger.js';
import { validateIds } from '../middlewares/validateIds.js';

//Se inicializa Router
const routerLocations = express.Router();

//Cuando llegue una petición se activa el controller
routerLocations.get('/', getControllerLocations);
routerLocations.get('/:id', getControllerLocationById);
routerLocations.get('/multiple/:ids', [validateIds] , getControllerLocationByIds);

//Se exporta el router
export { routerLocations }