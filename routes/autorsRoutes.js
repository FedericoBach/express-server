const express = require('express')

//CONTROLLERS
const {
    allAutorsController, 
    renderAutorsController, 
    autorByIdController, 
    createAutorController,
    updateAutorController,
    deleteAutorController
} = require('../controllers/autors')

//MIDDLEWARES
const { requiresAutorLoginMiddleware } = require('../middlewares/protectedRoutes')

const router = express.Router()

router.use("/*", requiresAutorLoginMiddleware)

router.get("/", allAutorsController)

router.get("/render", renderAutorsController)

router.get("/:id", autorByIdController)

router.post("/create", createAutorController)

router.put("/update/:id", updateAutorController)

router.delete("/delete/:id", deleteAutorController)

module.exports = router