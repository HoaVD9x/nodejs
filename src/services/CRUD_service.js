import bcrypt from 'bcrypt';
import db from "../models/index"
const salt = bcrypt.genSaltSync(10);

let create_new_user = async (data) => {
    return new Promise(async (resolve, reject) => {

        try {
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
            resolve("oke create a new user success !")
        } catch (e) {
            reject(e)

        }
    })
}


let hash_user_password = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hash_password = await bcrypt.hashSync(password, salt)
            resolve(hash_password)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    create_new_user: create_new_user
}