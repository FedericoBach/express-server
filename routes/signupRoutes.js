const express = require('express')

//CONTROLLERS
const {
    renderSignupLectorController, 
    renderSignupAutorController, 
    signupLectorController, 
    signupAutorController
} = require("../controllers/signup")

const router = express.Router()

router.get("/lector", renderSignupLectorController)
router.get("/autor", renderSignupAutorController)

router.post("/lector", signupLectorController)
router.post("/autor", signupAutorController)

module.exports = router