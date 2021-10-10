const {request} = require("../db/request")

module.exports.allAutors = async () => {
    const data = await request("SELECT * FROM autors")

    return {
        autors: data
    }
}

module.exports.autorById = async (id) => {
    const data = await request(`SELECT * FROM autors WHERE id = ${id}`)

    return {
        autor: data[0]
    }
}

module.exports.createAutor = async ({name, lastname, birth_date, alive}) => {
    const data = await request(`
        INSERT INTO autors(name, lastname, birth_date, alive)
        VALUES('${name}', '${lastname}', '${birth_date}', ${alive});
    `)

    return {
        id: data.insertId,
        name
    }
}

module.exports.updateAutor = async ({id, name, lastname, birth_date, alive}) => {
    const data = await request(`
        UPDATE autors
        SET name = '${name}',
            lastname = '${lastname}',
            birth_date = '${birth_date}',
            alive = ${alive}
        WHERE id = ${id}
    `)

    return {
        id,
        name,
        lastname,
        birth_date,
        alive,
        updated: data.affectedRows ? true : false
    }
}

module.exports.deleteAutor = async (id) => {
    const data = await request(`
        DELETE FROM autors
        WHERE id = ${id}
    `)
    return {
        id,
        deleted: data.affectedRows ? true : false
    }
}