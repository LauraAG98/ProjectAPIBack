//Se importan los servicios que se van a usar en el controlador
import { getCharactersService, getCharacterById, getCharacterByName, getCharacterByStatus, getCharacterByGender } from '../services/characters.service.js'

async function getCharactersController(req, res) {
    //Se obtiene el parámetro de la petición
    const pageRequest = req.query.page;
    const nameRequest = req.query.name;
    const statusRequest = req.query.status;
    const genderRequest = req.query.gender;

    //Condición que permite seguir el flujo adecuado dependiendo del parámetro obtenido.
    if (pageRequest) {
        //Se guarda la respuesta de la API en una constante.
        const response = await getCharactersService(pageRequest);

        //Se envía la respuesta en formato JSON.
        res.json(response);

    } else if (nameRequest) {
        //Se guarda la respuesta de la API en una constante.
        const responseName = await getCharacterByName(nameRequest);

        //Se envía la respuesta en formato JSON.
        res.json(responseName);

    } else if (statusRequest){
        //Se guarda la respuesta de la API en una constante.
        const responseStatus = await getCharacterByStatus(statusRequest);

        //Se envía la respuesta en formato JSON.
        res.json(responseStatus);

    } else if (genderRequest) {
        //Se guarda la respuesta de la API en una constante.
        const responseGender = await getCharacterByGender(genderRequest);

        //Se envía la respuesta en formato JSON.
        res.json(responseGender);

    } else {
        //En caso de no ser encontrado se envía mensaje
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
export { getCharactersController, getCharacterControllerId, getCharacterByName, getCharacterByStatus, getCharacterByGender };