import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/view_engine";
import initWebRoutes from './route/web';
import connect_db from "./config/connect_DB";
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connect_db();
let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})