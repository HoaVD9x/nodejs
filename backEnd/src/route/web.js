import express from "express";
import home_controller from "../controllers/home_controller"
import user_controller from "../controllers/user_controller"

let router = express.Router();
let init_web_routers = (app) => {
    router.get("/", home_controller.get_home_page)

    router.get("/crud", home_controller.get_crud)

    router.get("/get_crud", home_controller.display_get_curd)

    router.post("/post_crud", home_controller.post_crud)

    router.get("/edit_crud", home_controller.edit_crud)

    router.post("/api/login", user_controller.handler_login)

    router.get("/api/get_all_user", user_controller.handler_get_all_user)

    router.post("/api/create_new_user", user_controller.handler_create_new_user)

    router.put("/api/edit_user", user_controller.handler_edit_user)

    router.delete("/api/delete_user", user_controller.handler_delete_user)
    return app.use("/", router)
}

module.exports = init_web_routers;