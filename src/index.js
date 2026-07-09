import express from 'express';
import cors from 'cors';
import { router } from '../src/routes/Characters.route.js';

//Se inicializa express
const app = express();

//Se usan los cors para permitir peticiones desde otro puerto
app.use(cors());

//Se crea constante que contiene el número de puerto
const PORT = process.env.PORT || 3001;

//Se agrega mensaje de confirmación
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

//App decide a que ruta decide enviar la petición
app.use('/Characters', router)