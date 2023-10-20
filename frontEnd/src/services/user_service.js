import axios from "../axios";
const handler_login = (email, password) => {
    return axios.post("/api/login", { email, password });
}

const get_all_user = (id) => {
    return axios.get(`/api/get_all_user?id=${id}`)
}

const createNewUserService = (data) => {

    return axios.post("/api/create_new_user", data)
}
export { handler_login, get_all_user, createNewUserService }