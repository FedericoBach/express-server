const {request} = require("../db/request")

module.exports.getImageById = async (id) => {
    const images = await request(`SELECT * FROM imagenes WHERE id = ${id}`)

    return images[0]
}

module.exports.createImageLector = async (files) => {
    const image = await request(`
        INSERT INTO imagenes(path, upload_date, type)
        VALUES ${files.map((file) => `('${file.path}', NOW(), 'LECTOR')`).toString()}
    `)

    return {
        "id": image.affectedRows,
    }
}