const {request} = require("../db/request")

module.exports.signinLector = async (user, password) => {
    const data = await request(`
        SELECT 
            email AS user,
            password
        FROM users
        WHERE email = '${user}'
    `)

    if(data.length){
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