import { getEpisodes, getEpisodeById, getEpisodesByName } from "../services/episodes.service.js";

//Función que obtiene el parámetro de la petición
async function getEpisodesController(req, res) {
    //Constante que guarda el parámetro de la petición
    const pageRequest = req.query.page;
    const nameRequest = req.query.name;

    //Condición que permite seguir el flujo adecuado dependiendo del parámetro obtenido.
    //Las respuestas se obtienen en formato JSON
    if (pageRequest) {
        const responsePage = await getEpisodes(pageRequest);

        res.json(responsePage);
    } else if (nameRequest) {
        const responseName = await getEpisodesByName(nameRequest); 

        res.json(responseName);
    } else {
        res.status(404).json({error: 'Not found'});
    }
}

//Función asíncrona que realiza petición y obtiene respuesta por Id al servicio
async function getEpisodeControllerById(req, res) {
    //Guarda el parámetro de la petición
    const idRequest = req.params.id;

    //Respuesta que se obtiene desde el servicio 
    const responseId = await getEpisodeById(idRequest);

    //Se obtiene y devuelve el resultado en formato JSON
    res.json(responseId)
}

//Se exporta la función
export { getEpisodesController, getEpisodeControllerById }