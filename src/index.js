import express from 'express';
import cors from 'cors';

//Se inicializa express
const app = express();

//Se usan los cors para permitir peticiones desde otro puerto
app.use(cors());

//Se crea constante que contiene el número de puerto
const PORT = 3000;

//Se agrega mensaje de confirmación
app.listen(PORT, ()=> {
    console.log("Servidor corriendo en el puerto 3000");
})