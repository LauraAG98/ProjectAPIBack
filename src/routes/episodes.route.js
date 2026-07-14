import { getEpisodesController } from '../controllers/episodes.controller.js';
import express from 'express';

//Se inicializa el router
const routerEpisodes = express.Router();

//Cuando llegue una petición, se ejecuta el controller
routerEpisodes.get('/', getEpisodesController);

//Se exporta el router
export { routerEpisodes }