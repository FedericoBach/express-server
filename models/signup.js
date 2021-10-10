const {request} = require("../db/request")

//UTILS
const {hashPassword} = require('../utils/password')

module.exports.signupLector = async (user, password) => {
    const hashedPassword = hashPassword(password)
    const data = await request(`
        INSERT INTO users(email, password, type)
        VALUES('${user}', '${hashedPassword}', "LECTOR")
    `)

    return {
        id: data.insertId,
        user
    }
}