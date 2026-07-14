import { getControllerLocations, getControllerLocationById, getControllerLocationByIds } from '../controllers/locations.controller.js';
import express from 'express';

//Se inicializa Router
const routerLocations = express.Router();

//Cuando llegue una petición se activa el controller
routerLocations.get('/', getControllerLocations);
routerLocations.get('/:id', getControllerLocationById);
routerLocations.get('/:ids', getControllerLocationByIds);

//Se exporta el router
export { routerLocations }