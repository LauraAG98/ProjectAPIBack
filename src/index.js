import express from 'express';
import cors from 'cors';
import { routerCharacters } from './routes/Characters.route.js'; 
import { routerEpisodes } from './routes/episodes.route.js';
import { routerLocations } from './routes/locations.route.js';

//Se inicializa express
const app = express();

//Se usan los cors para permitir peticiones desde otro puerto
app.use(cors());
//App decide a que ruta decide enviar la petición
app.use('/character', routerCharacters);
app.use('/episode', routerEpisodes);
app.use('/location', routerLocations);

//Se crea constante que contiene el número de puerto
const PORT = process.env.PORT || 3001;

//Se agrega mensaje de confirmación
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})