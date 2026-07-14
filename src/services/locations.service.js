//Función que realiza la petición
async function getLocations(page) {
    //Constante que contiene la url
    const url = `https://rickandmortyapi.com/api/location?page=${page}`;

    //Se realiza petición a la API
    const res = await fetch(url);

    //Se convierte en formato JSON
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

    //Se convierte en formato JSON
    const data = res.json();

    //Se devuelve la respuesta
    return data;
}

//Función asíncrona
async function getLocationsByIds(ids) {
    //Constante que obtiene url de la API
    const url = `https://rickandmortyapi.com/api/location/${ids.join(',')}`;

    //Constante que guarda respuesta de la petición
    const res = await fetch(url);

    //Se convierte a formato JSON
    const data = res.json();

    //Se devuelve la respuesta
    return data;
}

export { getLocations, getLocationById, getLocationsByIds }