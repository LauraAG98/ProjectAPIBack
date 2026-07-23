//Función que realiza la petición
async function getLocations(page) {
    //Constante que contiene la url
    const url = `https://rickandmortyapi.com/api/location?page=${page}`;

    //Se realiza petición a la API
    const res = await fetch(url);

    //Guarda y convierte a formato JSON la respuesta de la API
    const data = res.json();

    //Se regresa la respuesta
    return data;
}

//Función asíncrona
async function getLocationById(id) {
    //Constante que contiene la url de la API
    const url = `https://rickandmortyapi.com/api/location/${id}`;

    //Petición que se realiza a la API
    const res = await fetch(url);

    //Guarda y convierte a formato JSON la respuesta de la API
    const data = res.json();

    //Se devuelve la respuesta
    return data;
}

//Función asíncrona
async function getLocationsByIds(ids) {
    //Constante que obtiene url de la API
    const url = `https://rickandmortyapi.com/api/location/${ids}`;

    //Constante que guarda respuesta de la petición
    const res = await fetch(url);

    //Guarda y convierte a formato JSON la respuesta de la API
    const data = res.json();

    //Se devuelve la respuesta
    return data;
}

//Se exportan las funciones para que puedan ser importadas desde otra clase
export { getLocations, getLocationById, getLocationsByIds }