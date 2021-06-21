import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.send('olá');
})

app.listen(3000, () => {
    console.log('This server is running... 🔥')
})
