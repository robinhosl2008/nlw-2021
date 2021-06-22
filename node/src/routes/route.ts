import express from 'express';
import { LoginController } from '../controllers/LoginController';

const app = express();



app.get('/', (request, response) => {
    response.send('Estou vivo!');
})

//app.get('/', LoginController.index);

export { app };
