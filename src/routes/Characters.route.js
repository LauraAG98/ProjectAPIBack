//Se importa controlador y express
import {getCharactersController} from '../controllers/Characters.controller'
import express from 'express';

//Se inicializa el router
const router = express.Router();

//Cuando llegue una petición, se ejecuta el controller
router.get('/',getCharactersController);

//Se exporta el router
export { router };