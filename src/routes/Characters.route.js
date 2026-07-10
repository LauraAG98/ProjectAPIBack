//Se importa controlador y express
import { getCharactersController, getCharacterControllerId } from '../controllers/characters.controller.js'
import express from 'express';

//Se inicializa el router
const router = express.Router();

//Cuando llegue una petición, se ejecuta el controller
router.get('/', getCharactersController );
router.get('/:id', getCharacterControllerId);

//Se exporta el router
export { router };