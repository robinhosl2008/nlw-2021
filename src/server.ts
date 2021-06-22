import "reflect-metadata";
import express from 'express';
import "./database";

const app = express();



app.get('/', (request, response) => {
    response.send('Estou vivo!');
});


app.listen(3000, () => {
    console.log('This server is running... 🔥')
})

