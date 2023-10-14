import express from "express";

let router =  express.Router();
let init_web_routers = (app) =>{
    router.get("/",(request, response) =>{
        return response.send("hello world")
    })
    return app.use("/", router)
}

module.exports = init_web_routers;