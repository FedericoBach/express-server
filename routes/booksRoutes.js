const express = require('express')

//CONTROLLERS
const {allBooksController, renderBooksController, bookByIdController, deleteBookController} = require("../controllers/books")

const router = express.Router()

router.use((req, res, next) => {
    const {host} = req.headers

    res.host = host

    next()
})

router.get("/", allBooksController)

router.get("/render", renderBooksController)

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
    bookByIdController
)

router.post("/create/:id", (req, res) => res.send(`Creacion de libro ${req.params.id}.`))

router.put("/update/:id", (req, res) => res.send(`Actualizacion de libros ${req.params.id}.`))

router.delete("/delete/:id", deleteBookController)

module.exports = router