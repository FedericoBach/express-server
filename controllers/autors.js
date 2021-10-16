//MODELS
const {allAutors, autorById, createAutor, updateAutor, deleteAutor} = require("../models/autors")
module.exports.allAutorsController = async (req, res) => {
    try{
        const autors = await allAutors()
        return res.send(autors)
    }catch(err){
        return res.send("Se produjo un error")
    }
}

module.exports.renderAutorsController = async (req, res) => {
    try{
        const autors = await allAutors()
        return res.render("autors", {
            layout:"index", 
            autors: autors.autors, 
            hasAutors:autors.autors.length ? true: false,
            shouldRenderLogout: true,
            redirectPath: "/logout/autor"
        })
    }catch(err){
        return res.send("Se produjo un error")
    }
}

module.exports.autorByIdController = async (req, res) => {
    const {id} = req.params
    try{
        const autor = await autorById(id)
        return res.send(autor)
    }catch(err){
        return res.send("Se produjo un error")
    }
}

module.exports.createAutorController = async (req, res) => {
    const {name, lastname, birth_date, alive} = req.body
    try{
        const autor = await createAutor({name, lastname, birth_date, alive})
        return res.send(autor)
    } catch(err) {
        console.log(err)
        return res.send("Se produjo un error")
    }
}

module.exports.updateAutorController = async (req, res) => {
    const {id, name, lastname, birth_date, alive} = req.body
    try{
        const autor = await updateAutor({id, name, lastname, birth_date, alive})
        return res.send(autor)
    } catch(err) {
        console.log(err)

        return res.send("Se produjo un error")
    }
}

module.exports.deleteAutorController = async (req, res) => {
    const {id} = req.params
    try{
        const autor = await deleteAutor(id)
        return res.send(autor)
    }catch(err){
        return res.send("Se produjo un error")
    }
}