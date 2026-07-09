//Se importan los servicios que se van a usar en el controlador
import { getCharactersService } from '../services/Characters.service.js'

async function getCharactersController(req, res) {
    //Se obtiene el parámetro enviado en la petición
    const pageRequest = req.query.page;

    //Se guarda la respuesta del servicio en una variable
    const response = await getCharactersService(pageRequest);

    //Se envía la respuesta en formato JSON
    res.json(response);
}

//Se exporta la función asíncrona
export { getCharactersController };