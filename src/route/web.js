import express from "express";
import home_controller from "../controllers/home_controller"

let router = express.Router();
let init_web_routers = (app) => {
    router.get("/", home_controller.get_home_page)

    router.get("/crud", home_controller.get_crud)

    router.post("/post_crud", home_controller.post_crud)
    return app.use("/", router)
}

module.exports = init_web_routers;