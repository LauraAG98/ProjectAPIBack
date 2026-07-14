import { getLocations, getLocationById, getLocationsByIds } from "../services/locations.service.js";

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

//Función asíncrona
async function getControllerLocationByIds(req, res) {
    //Constante que guarda parámetro
    const idsRequest = res.params.ids;

    //Constante que guarda el parámetro de la petición
    const responseIds = await getControllerLocationByIds(idsRequest);

    //Se envía respuesta en formato JSON
    res.json(responseIds);
}

export { getControllerLocations, getControllerLocationById, getControllerLocationByIds }