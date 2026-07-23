//Middleware que realiza verificación de Id's ingresados
function validateIds(req, res, next) {
    //Obtiene los Id's y los separa por comas
    const ids = req.params.ids.split(',');

    //Ciclo que recorre cada Id
    for (const id of ids) {
        //Validación para identificar si los ids ingresados son números y superiores a 0
        if (isNaN(id) || Number(id) <= 0) {
            return res.status(400).json({
                error: 'Debes ingresar IDs que sean números superiores a 0'
            })
        }
    }

    //Si los datos ingresados son correctos, el proceso continua
    next();
}

//Se exporta la función
export { validateIds }