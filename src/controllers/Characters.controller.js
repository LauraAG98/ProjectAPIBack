//Se importan los servicios que se van a usar en el controlador
import { getCharactersService, getCharacterById, getCharacterByName } from '../services/characters.service.js'

async function getCharactersController(req, res) {
    //Se obtiene el parámetro enviado desde la petición
    const pageRequest = req.query.page;
    const nameRequest = req.query.name;

    //Condición para confirmar desde que método viene el parametro
    if (pageRequest) {
        //Se guarda la respuesta del servicio en una variable
        const response = await getCharactersService(pageRequest);

        //Se envía la respuesta en formato JSON
        res.json(response);

    } else if (nameRequest) {
        //Se guarda la respuesta en una constante.
        const responseName = await getCharacterByName(nameRequest);

        //Se envía respuesta en formato JSON.
        res.json(responseName);
    } else {
        res.status(404).json({error: 'Not found'});
    }
}

async function getCharacterControllerId(req, res) {
    //Se obtiene el parámetro enviado en la petición
    const idRequest = req.params.id;

    //Se guarda la respuesta del servicio en una constante
    const respondeId = await getCharacterById(idRequest);

    //Se envía la respuesta en formato JSON
    res.json(respondeId);
}

//Se exporta la función asíncrona
export { getCharactersController, getCharacterControllerId, getCharacterByName };