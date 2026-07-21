//Se importan los servicios que se van a usar en el controlador
import { getCharactersService, getCharacterById, getCharacterByName, getCharacterByStatus, getCharacterByGender } from '../services/characters.service.js'

async function getCharactersController(req, res) {
    //Se obtiene el parámetro de la petición
    const { page, name, status, gender } = req.query;

    //Condición que permite seguir el flujo adecuado dependiendo del parámetro obtenido.
    //Las respuestas se obtienen en formato JSON
    if (page) {
        const response = await getCharactersService(page);

        res.json(response);

    } else if (name) {
        const responseName = await getCharacterByName(name);

        res.json(responseName);

    } else if (status){
        const responseStatus = await getCharacterByStatus(status);

        res.json(responseStatus);

    } else if (gender) {
        const responseGender = await getCharacterByGender(gender);

        res.json(responseGender);

    } else {
        //En caso de no ser encontrado se envía mensaje de error
        res.status(404).json({error: 'Not found'});
    }
}

async function getCharacterControllerId(req, res) {
    //Se obtiene el parámetro enviado en la petición
    const { id } = req.params;

    //Se guarda la respuesta del servicio en una constante
    const responseId = await getCharacterById(id);

    //Se envía la respuesta en formato JSON
    res.json(responseId);
}

//Se exporta la función asíncrona
export { getCharactersController, getCharacterControllerId, getCharacterByName, getCharacterByStatus, getCharacterByGender };