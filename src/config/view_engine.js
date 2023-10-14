import express from "express";


let config_view_engine = (app) => {
    // arrow function 
    // cau hinh truy cap vao static file
    app.use(express.static("./src/public/"))
    app.set("view engine", "ejs")
    app.set("views", "./src/views")
    
}

module.exports = config_view_engine;