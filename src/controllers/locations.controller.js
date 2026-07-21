import { getLocations, getLocationById, getLocationsByIds } from "../services/locations.service.js";

//Funciones asíncronas que guardan el parámetro de la petición
//Se envía la respuesta del servicio en formato JSON
async function getControllerLocations(req, res) {
    const { page } = req.query;

    const responsePage = await getLocations(page);

    res.json(responsePage);
}

async function getControllerLocationById(req, res) {
    const { id } = req.params;

    const responseId = await getLocationById(id);

    res.json(responseId);
}

async function getControllerLocationByIds(req, res) {
    const { ids } = res.params;

    const responseIds = await getControllerLocationByIds(ids);

    res.json(responseIds);
}

//Se exportan las funciones para se importadas en la ruta
export { getControllerLocations, getControllerLocationById, getControllerLocationByIds }