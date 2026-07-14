//Se importa controlador y express
import { getCharactersController, getCharacterControllerId } from '../controllers/characters.controller.js'
import express from 'express';

//Se inicializa el router
const routerCharacters = express.Router();

//Cuando llegue una petición, se ejecuta el controller
routerCharacters.get('/', getCharactersController );
routerCharacters.get('/:id', getCharacterControllerId);

//Se exporta el router
export { routerCharacters };