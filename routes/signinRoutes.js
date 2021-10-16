const express = require('express')

//CONTROLLERS
const {
    renderSigninLectorController, 
    renderSigninAutorController,
    signinLectorController,
    signinAutorController
} = require("../controllers/signin")

//MIDDLEWARES
const {redirectLoguedUserMiddleware, redirectLoguedAutorMiddleware} = require("../middlewares/protectedRoutes")

const router = express.Router()

router.use("/lector", redirectLoguedUserMiddleware)
router.use("/autor", redirectLoguedAutorMiddleware)

router.get("/lector", renderSigninLectorController)
router.get("/autor", renderSigninAutorController)

router.post("/lector", signinLectorController)
router.post("/autor", signinAutorController)

module.exports = router