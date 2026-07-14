//Se crea función asíncrona
async function getEpisodes(page) {
    //Se crea url para poder hacer solicitud a la API
    const url = `https://rickandmortyapi.com/api/episode?page=${page}`;

    //Se guarda la respuesta de la API
    const res = await fetch(url);

    //Se guarda la respuesta en formato JSON
    const data = await res.json();

    //Devuelve la respuesta
    return data;
}

//Función asíncrona
async function getEpisodeById(id) {
    //Constante que contiene la url de la API
    const url = `https://rickandmortyapi.com/api/episode/${id}`;

    //Se guarda la respuesta de la API
    const res = await fetch(url);

    //Se convierte la respuesta en formato JSON
    const data = await res.json();

    //Se devuelve lo que se obtuvo de la API
    return data;
}

export { getEpisodes, getEpisodeById }