import { getControllerLocations, getControllerLocationById } from '../controllers/locations.controller.js';
import express from 'express';

//Se inicializa Router
const routerLocations = express.Router();

//Cuando llegue una petición se activa el controller
routerLocations.get('/', getControllerLocations);
routerLocations.get('/:id', getControllerLocationById);

//Se exporta el router
export { routerLocations }