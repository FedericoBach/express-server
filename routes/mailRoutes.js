const express = require("express")

//CONTROLLERS
const {
    renderMailController,
    renderMailAutorController, 
    sendMailController,
    sendMailAutorController
} = require("../controllers/mail")

const router = express.Router()

router.get("/", renderMailController)
router.get("/autor", renderMailAutorController)

router.post("/", sendMailController)
router.post("/autor", sendMailAutorController)

module.exports = router