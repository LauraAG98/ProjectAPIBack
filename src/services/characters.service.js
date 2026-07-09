//Función async que realiza petición a la API
async function getCharacters(page) {
    //Se crea constante para guardar la url.
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    const res = await fetch (url);
    const data = await res.json();

    return data;
}

//Se exporta para poder ser usada o llamada desde otra clase
export {getCharacters};