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

export { getLocations }