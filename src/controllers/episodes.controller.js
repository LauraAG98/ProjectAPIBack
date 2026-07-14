import { getEpisodes, getEpisodeById, getEpisodesByName } from "../services/episodes.service.js";

//Función que obtiene el parámetro de la petición
async function getEpisodesController(req, res) {
    //Constante que guarda el parámetro de la petición
    const pageRequest = req.query.page;
    const nameRequest = req.query.name;

    //Condición que identifica el parámetro 
    if (pageRequest) {
        //Se obtiene el parámetro desde el servicio
        const respondePage = await getEpisodes(pageRequest);

        //Se convierte la respuesta en formato JSON 
        res.json(respondePage);
    } else if (nameRequest) {
        //Se obtiene el parámetro desde el servicio
        const responseName = await getEpisodesByName(nameRequest); 

        //Se convierte la respuesta en formato JSON
        res.json(responseName);
    } else {
        res.status(404).json({error: 'Not found'});
    }
}

//Función asíncrona
async function getEpisodeControllerById(req, res) {
    //Guarda el parámetro de la petición
    const idRequest = req.params.id;

    //Respuesta que se obtiene desde el servicio 
    const respondeId = await getEpisodeById(idRequest);

    //Se obtiene el resultado en formato JSON
    res.json(respondeId)
}

//Se exporta la función
export { getEpisodesController, getEpisodeControllerById }