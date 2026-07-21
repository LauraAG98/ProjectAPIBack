import { getControllerLocations, getControllerLocationById, getControllerLocationByIds } from '../controllers/locations.controller.js';
import express from 'express';
import { logger } from '../middlewares/logger.js';

//Se inicializa Router
const routerLocations = express.Router();

//Cuando llegue una petición se activa el controller
routerLocations.get('/', [logger] , getControllerLocations);
routerLocations.get('/:id', [logger] , getControllerLocationById);
routerLocations.get('/:ids', [logger] , getControllerLocationByIds);

//Se exporta el router
export { routerLocations }