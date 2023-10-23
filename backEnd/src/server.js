import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/view_engine";
import initWebRoutes from './route/web';
import connect_db from "./config/connect_DB";
import cors from "cors";

require('dotenv').config();

let app = express();


//config app

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.URL_REACT); // Replace with the origin of your frontend application
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Specify the HTTP methods you want to allow
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify the headers you want to allow
    res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials (if needed)
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connect_db();
let port = process.env.PORT || 8080;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})