import { getEpisodes, getEpisodeById, getEpisodesByName } from "../services/episodes.service.js";

//Función que obtiene el parámetro de la petición
async function getEpisodesController(req, res) {
    //Constante que guarda el parámetro de la petición
    const {page, name} = req.query

    //Condición que permite seguir el flujo adecuado dependiendo del parámetro obtenido.
    //Las respuestas se obtienen en formato JSON
    if (page) {
        const responsePage = await getEpisodes(page);

        res.json(responsePage);
    } else if (name) {
        const responseName = await getEpisodesByName(name); 

        res.json(responseName);
    } else {
        res.status(404).json({error: 'Not found'});
    }
}

//Función asíncrona que realiza petición y obtiene respuesta por Id al servicio
async function getEpisodeControllerById(req, res) {
    //Guarda el parámetro de la petición
    const { id } = req.params;

    //Respuesta que se obtiene desde el servicio 
    const responseId = await getEpisodeById(id);

    //Se obtiene y devuelve el resultado en formato JSON
    res.json(responseId)
}

//Se exporta la función
export { getEpisodesController, getEpisodeControllerById }