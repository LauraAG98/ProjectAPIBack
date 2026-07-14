import { getLocations, getLocationById } from "../services/locations.service.js";

//Función asíncrona
async function getControllerLocations(req, res) {
    //Constante que guarda el parámetro de la petición
    const pageRequest = req.query.page;

    //Se obtiene parámetro desde la petición
    const responsePage = await getLocations(pageRequest);

    //Se envía resultado en formato JSON
    res.json(responsePage);
}

//Función asíncrona
async function getControllerLocationById(req, res) {
    //Constante que contiene parámetro
    const idRequest = req.params.id;

    //Constante que guarda el parámetro de la petición
    const responseId = await getLocationById(idRequest);

    //Se envia respuesta en formato JSON
    res.json(responseId);
}

export { getControllerLocations, getControllerLocationById }