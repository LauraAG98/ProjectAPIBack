//Se importan los servicios que se van a usar en el controlador
import { getCharactersService, getCharacterById, getCharacterByName, getCharacterByStatus, getCharacterByGender } from '../services/characters.service.js'

async function getCharactersController(req, res) {
    //Se obtiene el parámetro de la petición
    const pageRequest = req.query.page;
    const nameRequest = req.query.name;
    const statusRequest = req.query.status;
    const genderRequest = req.query.gender;

    //Condición que permite seguir el flujo adecuado dependiendo del parámetro obtenido.
    //Las respuestas se obtienen en formato JSON
    if (pageRequest) {
        const response = await getCharactersService(pageRequest);

        res.json(response);

    } else if (nameRequest) {
        const responseName = await getCharacterByName(nameRequest);

        res.json(responseName);

    } else if (statusRequest){
        const responseStatus = await getCharacterByStatus(statusRequest);

        res.json(responseStatus);

    } else if (genderRequest) {
        const responseGender = await getCharacterByGender(genderRequest);

        res.json(responseGender);

    } else {
        //En caso de no ser encontrado se envía mensaje de error
        res.status(404).json({error: 'Not found'});
    }
}

async function getCharacterControllerId(req, res) {
    //Se obtiene el parámetro enviado en la petición
    const idRequest = req.params.id;

    //Se guarda la respuesta del servicio en una constante
    const responseId = await getCharacterById(idRequest);

    //Se envía la respuesta en formato JSON
    res.json(responseId);
}

//Se exporta la función asíncrona
export { getCharactersController, getCharacterControllerId, getCharacterByName, getCharacterByStatus, getCharacterByGender };