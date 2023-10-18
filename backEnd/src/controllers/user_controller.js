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


module.exports = {
    handler_login: handler_login,
}