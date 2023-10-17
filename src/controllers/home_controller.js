import CRUD_service from "../services/CRUD_service"

const { request, response } = require("express")

let get_home_page = async (request, response) => {
    return response.render("home_page.ejs")

}
let get_crud = (request, response) => {
    return response.render("get_crud.ejs")
}

let post_crud = async (request, response) => {
    let message = await CRUD_service.create_new_user(request.body)
    console.log(message)
    return response.send("data form crud")
}
module.exports = {
    get_home_page: get_home_page,
    get_crud: get_crud,
    post_crud: post_crud,
}