import user_service from "../services/user_service"



let handler_login = async (request, response) => {
    let email = request.body.email
    let password = request.body.password

    if (!email || !password) {
        return response.status(500).json({
            err_code: 1,
            message: "missing inputs parameter",
        })

    }
    let user_data = await user_service.handler_user_login(email, password)
    //check email exist
    //compare password
    // return user_infor
    // access_token:JWT jswon web tokken

    return response.status(200).json({
        err_code: user_data.err_code,
        message: user_data.err_message,
        user: user_data.user ? user_data.user : {}
    })
}


let handler_get_all_user = async (request, response) => {
    let id = request.query.id  // all or single

    if (!id) {
        return response.status(200).json({
            err_code: 1,
            err_message: "missing required parameter",
            users: []
        })
    }
    let users = await user_service.get_all_user(id)
    return response.status(200).json({
        err_code: 0,
        err_message: "ok",
        users
    })
}

let handler_create_new_user = async (request, response) => {
    let message = await user_service.create_new_user(request.body)
    return response.status(200).json(message)
}

let handler_edit_user = async (request, response) => {
    if (!request.body.id) {
        return response.status(200).json({
            err_code: 1,
            err_message: "missing required parameter !"
        })
    }
    let message = await user_service.create_edit_user(request.body)
    return response.status(200).json(message)
}

let handler_delete_user = async (request, response) => {
    if (!request.body.id) {
        return response.status(200).json({
            err_code: 1,
            err_message: "missing required parameter !"
        })
    }
    let message = await user_service.create_delete_user(request.body.id)
    return response.status(200).json(message)
}
module.exports = {
    handler_login: handler_login,
    handler_get_all_user: handler_get_all_user,
    handler_create_new_user: handler_create_new_user,
    handler_edit_user: handler_edit_user,
    handler_delete_user: handler_delete_user,
}