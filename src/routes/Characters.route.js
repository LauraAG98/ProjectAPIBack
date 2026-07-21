//Se importa controlador y express
import { getCharactersController, getCharacterControllerId } from '../controllers/characters.controller.js'
import express from 'express';
import { logger } from '../middlewares/logger.js';

//Se inicializa el router
const routerCharacters = express.Router();

//Cuando llegue una petición, se ejecuta el controller
routerCharacters.get('/', [logger] , getCharactersController );
routerCharacters.get('/:id', [logger], getCharacterControllerId);

//Se exporta el router
export { routerCharacters };