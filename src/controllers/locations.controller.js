import { getLocations, getLocationById, getLocationsByIds } from "../services/locations.service.js";

//Funciones asíncronas que guardan el parámetro de la petición
//Se envía la respuesta del servicio en formato JSON
async function getControllerLocations(req, res) {
    const pageRequest = req.query.page;

    const responsePage = await getLocations(pageRequest);

    res.json(responsePage);
}

async function getControllerLocationById(req, res) {
    const idRequest = req.params.id;

    const responseId = await getLocationById(idRequest);

    res.json(responseId);
}

async function getControllerLocationByIds(req, res) {
    const idsRequest = res.params.ids;

    const responseIds = await getControllerLocationByIds(idsRequest);

    res.json(responseIds);
}

//Se exportan las funciones para se importadas en la ruta
export { getControllerLocations, getControllerLocationById, getControllerLocationByIds }