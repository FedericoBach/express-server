const express = require('express')

const router = express.Router()

router.get("/", (req, res) => res.send("Obtencion de autores."))

router.get("/:id", 
    (req, res, next) => {
        const {id} = req.params
        const numericId = parseInt(id)

        if(isNaN(numericId) || numericId < 1){
            return res.send("El id es invalido.")
        } else {
            next()
        }
    },
    (req, res) => res.send(`Obtencion de autors ${req.params.id}.`)
)

/////////////////////////////
router.get('/render' , (req , res) => {
return res.render( "autors" , {layout: 'index'})
})
/////////////////////////////

router.post("/create", (req, res) => res.send("Creacion de autores."))

router.post("/create/:id", (req, res) => res.send(`Creacion de autores ${req.params.id}.`))

router.put("/update", (req, res) => res.send("Actualizacion de autores."))

router.put("/update/:id", (req, res) => res.send(`Actualizacion de autores ${req.params.id}.`))

router.delete("/delete", (req, res) => res.send("Eliminacion de autores."))

router.delete("/delete/:id", (req, res) => res.send(`Eliminacion de autores ${req.params.id}.`))

module.exports = router

//router.get("/:id", (req, res) => res.send(`Obtencion de autores ${req.params.id}.`))