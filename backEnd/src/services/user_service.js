import db from "../models"
import bcrypt from "bcrypt"
let handler_user_login = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user_data = {};
            let is_exist = await check_user_email(email)
            if (is_exist) {
                // user already exist 
                let user = await db.User.findOne({
                    attributes: ["email", "role_id", "password"],
                    where: {
                        email: email
                    },
                    raw: true
                })
                if (user) {
                    // compare password
                    let check = await bcrypt.compareSync(password, user.password)
                    if (check) {
                        user_data.err_code = 0;
                        user_data.err_message = "OK";
                        delete user.password;
                        user_data.user = user;
                    } else {
                        user_data.err_code = 3;
                        user_data.err_message = "wrong password !"
                    }
                } else {
                    user_data.err_code = 2;
                    user_data.err_message = `User's not found`
                }

            } else {
                //return error
                user_data.err_code = 1;
                user_data.err_message = `your's email isn't exist in your system. plz try another email`;

            }
            resolve(user_data)
        } catch (e) {
            reject(e)
        }
    })

}


let check_user_email = (user_email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: user_email }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}


// let compare_user_password = () => {
//     return new Promise(async(resolve, reject) = {
//         try {

//         } catch(e) {
//             reject(e)
//         }
//     })
// }
module.exports = {
    handler_user_login: handler_user_login,
}