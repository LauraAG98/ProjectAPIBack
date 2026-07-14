import { getLocations } from "../services/locations.service.js";

//Función asíncrona para 
async function getControllerLocations(req, res) {
    //Constante que guarda el parámetro de la petición
    const pageRequest = req.query.page;

    //Se obtiene parámetro desde la petición
    const responsePage = await getLocations(pageRequest);

    //Se envía resultado en formato JSON
    res.json(responsePage);
}

export { getControllerLocations }