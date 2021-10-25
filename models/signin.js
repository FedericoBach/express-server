const {request} = require("../db/request")
const { comparePassword } = require("../utils/password")

module.exports.signinLector = async (user, password) => {
    const data = await request(`
        SELECT 
            email AS user,
            password
        FROM users
        WHERE email = '${user}'
        AND type = "LECTOR"
    `)

    if(data.length && comparePassword(password, data[0].password)){
        delete data[0].password
        return {
            user: data[0],
            existUser: true
        }
    } else {
        return {
            existUser: false
        }
    }
}

module.exports.signinAutor = async (user, password) => {
    const data = await request(`
        SELECT 
            email AS user,
            password
        FROM users
        WHERE email = '${user}'
        AND type = "AUTOR"
    `)

    if(data.length && comparePassword(password, data[0].password)){
        delete data[0].password
        return {
            user: data[0],
            existUser: true
        }
    } else {
        return {
            existUser: false
        }
    }
}