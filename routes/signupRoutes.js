const express = require('express')

//CONTROLLERS
const {renderSignupLectorController, signupLectorController} = require("../controllers/signup")

const router = express.Router()

router.get("/lector", renderSignupLectorController)

router.post("/lector", signupLectorController)

module.exports = router