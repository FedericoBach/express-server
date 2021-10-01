const express = require('express')

const router = express.Router()

router.get("/", (req, res) => res.send("Obtencion de autores."))

router.get("/render", (req, res) => {
    return res.render("autors", {layout:"index"})
})

router.get("/:id", (req, res) => res.send(`Obtencion de autores ${req.params.id}.`))

router.post("/create", (req, res) => res.send("Creacion de autores."))

router.post("/create/:id", (req, res) => res.send(`Creacion de autores ${req.params.id}.`))

router.put("/update", (req, res) => res.send("Actualizacion de autores."))

router.put("/update/:id", (req, res) => res.send(`Actualizacion de autores ${req.params.id}.`))

router.delete("/delete", (req, res) => res.send("Eliminacion de autores."))

router.delete("/delete/:id", (req, res) => res.send(`Eliminacion de autores ${req.params.id}.`))

module.exports = router