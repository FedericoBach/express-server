const express = require('express')

//CONTROLLERS
const {
    allBooksController, 
    renderBooksController, 
    bookByIdController, 
    createBookController,
    deleteBookController, 
    updateBookController
} = require("../controllers/books")

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

router.post("/create", createBookController)

router.put("/update", updateBookController)

router.delete("/delete/:id", deleteBookController)

module.exports = router