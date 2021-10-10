const express = require('express')

//CONTROLLERS
const {renderSigninLectorController, signinLectorController} = require("../controllers/signin")

const router = express.Router()

router.get("/lector", renderSigninLectorController)

router.post("/lector", signinLectorController)

module.exports = router