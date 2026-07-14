import { getEpisodesController, getEpisodeControllerById } from '../controllers/episodes.controller.js';
import express from 'express';

//Se inicializa el router
const routerEpisodes = express.Router();

//Cuando llegue una petición, se ejecuta el controller
routerEpisodes.get('/', getEpisodesController);
routerEpisodes.get('/:id', getEpisodeControllerById);

//Se exporta el router
export { routerEpisodes }