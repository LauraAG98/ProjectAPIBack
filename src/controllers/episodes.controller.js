import { getEpisodes } from "../services/episodes.service.js";

//Función que obtiene el parámetro de la petición
async function getEpisodesController(req, res) {
    //Constante que guarda el parámetro de la petición
    const pageRequest = req.query.page;      

    //Respuesta que se obtiene
    const respondePage = await getEpisodes(pageRequest);

    //Se convierte la respuesta en formato JSON 
    res.json(respondePage);
}

//Se exporta la función
export { getEpisodesController }