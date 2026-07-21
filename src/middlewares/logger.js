//Funcion que muestra en consola el método HTTP y la url de la petición 
function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);

    //Continua el proceso de la petición 
    next();
}

//Se exporta la función para que sea llamada desde routes como middleware
export { logger };