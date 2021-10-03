const {request} = require("../db/request")

module.exports.allBooks = async () => {
    const data = await request("SELECT * FROM books")

    return {
        books: data
    }
}

module.exports.bookById = async (id) => {
    const data = await request(`SELECT * FROM books WHERE id = ${id}`)

    return {
        book: data[0]
    }
}

module.exports.createBook = async ({name, publish_date, disponible}) => {
    const data = await request(`
        INSERT INTO books(name, publish_date, disponible)
        VALUES('${name}', '${publish_date}', ${disponible});
    `)

    return {
        id: data.insertId,
        name
    }
}

module.exports.updateBook = async ({id, name, publish_date, disponible}) => {
    const data = await request(`
        UPDATE books
        SET name = '${name}',
            publish_date = '${publish_date}',
            disponible = ${disponible}
        WHERE id = ${id}
    `)

    return {
        id,
        name,
        publish_date,
        disponible,
        updated: data.affectedRows ? true : false
    }
}

module.exports.deleteBook = async (id) => {
    const data = await request(`
        DELETE FROM books
        WHERE id = ${id}
    `)
    return {
        id,
        deleted: data.affectedRows ? true : false
    }
}