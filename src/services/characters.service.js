//Función async que realiza petición a la API
async function getCharactersService(page) {
    //Constante que guarda la página que ingrese el usuario.
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    const res = await fetch (url);
    const data = await res.json();

    return data;
}

//Función asíncrona que obtiene personaje por Id
async function getCharacterById(id) {
    //Constante que guarda el id ingresado.
    const url = `https://rickandmortyapi.com/api/character/${id}`
    //Constante que espera hasta obtener la url.
    const res = await fetch (url)
    //Constante que obtiene la respuesta en formato JSON.
    const data = await res.json();

    //Se devuelve la información.
    return data;
}

async function getCharacterByName(name) {
    //Constante que guarda la url de la API.
    const url = `https://rickandmortyapi.com/api/character?name=${name}`;

    //Constante que espera hasta obtener la url de la API.
    const res = await fetch(url);

    //Constante que obtiene la respuesta en formato JSON.
    const data = await res.json();

    //Devuelve la información obtenida
    return data
}

//Se exporta para poder ser usada o llamada desde otra clase
export { getCharactersService, getCharacterById, getCharacterByName };