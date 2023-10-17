import CRUD_service from "../services/CRUD_service"

const { request, response } = require("express")

let get_home_page = async (request, response) => {
    return response.render("home_page.ejs")

}
let get_crud = (request, response) => {
    return response.render("get_crud.ejs")
}

let display_get_curd = async (request, response) => {
    let data = await CRUD_service.get_all_user()
    console.log(data)
    return response.render("display_crud.ejs", {
        data_table: data
    })
}

let post_crud = async (request, response) => {
    let message = await CRUD_service.create_new_user(request.body)
    console.log(message)
    return response.send("data form crud")
}

let edit_crud = async (request, response) => {
    let user_id = request.query.id
    if (user_id) {
        let user_data = await CRUD_service.get_user_by_user_id(user_id)
        //check user not found!
    } else {
        return response.send("user not found !")
    }
    console.log(request.query.id)
    //     return response.send("edit_used")
}
module.exports = {
    get_home_page: get_home_page,
    get_crud: get_crud,
    post_crud: post_crud,
    display_get_curd: display_get_curd,
    edit_crud: edit_crud,
}