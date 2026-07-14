import { getEpisodes, getEpisodeById  } from "../services/episodes.service.js";

//Función que obtiene el parámetro de la petición
async function getEpisodesController(req, res) {
    //Constante que guarda el parámetro de la petición
    const pageRequest = req.query.page;      

    //Respuesta que se obtiene
    const respondePage = await getEpisodes(pageRequest);

    //Se convierte la respuesta en formato JSON 
    res.json(respondePage);
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