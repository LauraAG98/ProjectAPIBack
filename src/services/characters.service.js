//Función asincrona que realiza petición a la API
async function getCharactersService(page) {
    //Constante que guarda la url de la API.
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;

    //Solicita y espera respuesta de la url.
    const res = await fetch(url);

    //Obtiene y guarda la respuesta recibida en formato JSON 
    const data = await res.json();

    //Retorna la respuesta recibida
    return data;
}

//Función asíncrona que obtiene personaje por Id
async function getCharacterById(id) {
    //Constante que contiene la url.
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    //Constante que realiza la solicitud y obtiene respuesta de la url.
    const res = await fetch(url);

    //Constante que obtiene la respuesta en formato JSON.
    const data = await res.json();

    //Se devuelve la información.
    return data;
}

async function getCharacterByName(name) {
    //Constante que guarda la url de la API.
    const url = `https://rickandmortyapi.com/api/character?name=${name}`;

    //Constante que realiza la solicitud y obtiene respuesta de la url.
    const res = await fetch(url);

    //Constante que obtiene la respuesta en formato JSON.
    const data = await res.json();

    //Devuelve la información obtenida
    return data
}

async function getCharacterByStatus(status) {
    //Constante que realiza la solicitud y obtiene respuesta de la url.
    const url = `https://rickandmortyapi.com/api/character?status=${status}`;

    //Solicita y espera respuesta de la url.
    const res = await fetch(url);

    //Constante que obtiene la respuesta en formato JSON.
    const data = await res.json();

    //Devuelve la información obtenida en formato JSON.
    return data;
}

async function getCharacterByGender(gender) {
    //Constante que realiza la solicitud y obtiene respuesta de la url.
    const url = `https://rickandmortyapi.com/api/character?gender=${gender}`

    //Solicita y espera respuesta de la url.
    const res = await fetch(url);

    //Constante que obtiene la respuesta en formato JSON.
    const data = await res.json();

    //Devuelve la información obtenida en formato JSON.
    return data;
}

//Se exporta para poder ser usada o llamada desde otra clase
export { getCharactersService, getCharacterById, getCharacterByName, getCharacterByStatus, getCharacterByGender };