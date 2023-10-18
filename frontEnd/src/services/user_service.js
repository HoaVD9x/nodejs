import axios from "../axios";
const handler_login = (email, password) => {
    return axios.post("/api/login", { email, password });
}

export { handler_login }