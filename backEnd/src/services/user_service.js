import db from "../models"
import bcrypt from "bcrypt"

const salt = bcrypt.genSaltSync(10);
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

let get_all_user = (user_id) => {

    return new Promise(async (resolve, reject) => {
        try {
            let users = "";
            if (user_id === "ALL") {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ["password"]
                    }
                })
            }

            if (user_id && user_id !== "ALL") {
                users = await db.User.findOne({
                    where: { id: user_id },
                    attributes: {
                        exclude: ["password"]
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

let create_new_user = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check email is exist ???
            let check = await check_user_email(data.email);
            if (check) {
                resolve({
                    err_code: 1,
                    err_message: "your email is already in used, plz try another email!"
                })
            }
            let hash_password_from_Bcript = await hash_user_password(data.password);
            await db.User.create({
                password: hash_password_from_Bcript,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                address: data.address,
                gender: data.gender === "1" ? true : false,
                role_id: data.role_id,
                phone_number: data.phone_number,
            })
            resolve({
                err_code: 0,
                err_message: "ok"
            })
        } catch (e) {
            reject(e)

        }
    })
}

let hash_user_password = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hash_password = await bcrypt.hashSync(password, salt)
            resolve(hash_password);
        } catch (e) {
            reject(e)
        }
    })
}


let create_delete_user = (user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: user_id
                }
            })
            if (!user) {
                resolve({
                    err_code: 2,
                    err_message: `the user isn't exist`
                })
            }
            await user.destroy();
            resolve({
                err_code: 0,
                err_message: "the user is deleted"
            })
        } catch (e) {
            reject(e)
        }
    })
}

let create_edit_user = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: data.id
                }
            })
            if (!user) {
                resolve({
                    err_code: 1,
                    err_message: `the user isn't exist`
                })
            } else {
                user.first_name = data.first_name;
                user.last_name = data.last_name;
                user.address = data.address;
                await user.save();
                resolve({
                    err_code: 0,
                    err_message: "Update the user success!"
                });
            }

        } catch (e) {
            reject(e)
        }
    })

}
module.exports = {
    handler_user_login: handler_user_login,
    get_all_user: get_all_user,
    create_new_user: create_new_user,
    create_edit_user: create_edit_user,
    create_delete_user: create_delete_user,

}