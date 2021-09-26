const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
    const {host} = req.headers

    res.host = host

    next()
})

router.get("/", (req, res) => res.send("Obtencion de libros."))

router.get("/render", (req, res) => {
    return res.render("books", {layout:"index"})
})

router.get("/:id", 
    (req, res, next) => {
        const {id} = req.params
        const numericId = parseInt(id)

        if(isNaN(numericId) || numericId < 1){
            return res.send("El es id invalido.")
        } else {
            next()
        }
    },
    (req, res) => res.send(`Obtencion de libros ${req.params.id}.`)
)

router.post("/create", (req, res) => res.send("Creacion de libros."))

router.post("/create/:id", (req, res) => res.send(`Creacion de libro ${req.params.id}.`))

router.put("/update", (req, res) => res.send("Actualizacion de libros."))

router.put("/update/:id", (req, res) => res.send(`Actualizacion de libros ${req.params.id}.`))

router.delete("/delete", (req, res) => res.send("Eliminacion de libros."))

router.delete("/delete/:id", (req, res) => res.send(`Eliminacion de libros ${req.params.id}.`))

module.exports = router