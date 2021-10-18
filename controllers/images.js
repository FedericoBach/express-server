const fs = require("fs")

const {getImageById, createImageLector} = require("../models/images")

module.exports.renderUploadImages = (req, res) => res.render("imagesLectorUpload", {layout:"index"})

module.exports.uploadImages = async (req, res) => {
    try{
        const images = createImageLector(req.files)

        if(images){
            return res.redirect("/images/lector")
        } else {
            return res.send("Se produjo un error al subir las imagenes")
        }
    }catch(err){
        return res.send("Se produjo un error al subir las imagenes")
    }
}

module.exports.getImageById = async (req, res) => {
    const {id} = req.params

    try{
        const image = await getImageById(id)
        if(image){
            const imageB64 = fs.readFileSync(image.path, {encoding:"base64"})
        
            const html = `<img src="data:image/jpg;base64,${imageB64}" alt="imagen" />`
            return res.send(html)
        } else {
            return res.send(`No existe la imagen con el id: ${id}`)
        }
        
    }catch(err){
        return res.send("Se produjo un error al traer la imagen")
    }
}