const mysql = require("mysql")

module.exports.request = (query) => new Promise((res, rej) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'pdtc',
        password: 'pdtc',
        database: 'pdtc'
    })

    connection.query(query, (error, data, fields) => {
        if(error) rej(error)
    
        connection.end((err) => {
            if(err) rej(err)
            res(data)
        })
    })
})

