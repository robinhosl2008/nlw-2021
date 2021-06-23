import "reflect-metadata";
import express from 'express';
import "express-async-errors";
import { AccessMiddleware } from "./middleware";
import { router } from "./routes";
import "./database";

const app = express();

// Dizendo para a aplicação que queremos utilizar o json.
app.use(express.json());
app.use(router);

const accessMiddleware = new AccessMiddleware();
app.use(accessMiddleware.handle);

app.listen(3000, () => {
    console.log('This server is running... 🔥')
});

