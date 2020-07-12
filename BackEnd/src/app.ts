import express from 'express';

import bodyParser from "body-parser";
import * as userController from './controllers/user-controller';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import * as appConfig from './common/app-config';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT || 8000;
const server = app.listen(port, listenin);
function listenin() {
    console.log("server running on localhost 8000!")
}






createConnection(appConfig.dbOptions).then(async connection => {
    console.log("Connected to DB!")
}).catch(error =>
    console.log(" Connection Error with TypeOrm", error));


app.get("/AllUsers", userController.getUsers);
app.post('/RegUser', userController.RegUser);
app.post('/getUser', userController.getUser);

module.exports = app;