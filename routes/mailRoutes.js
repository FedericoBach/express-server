const express = require("express")

const {sendMail} = require("../utils/mail")

const router = express.Router()

router.get("/", (req, res) => res.render("mail", {layout:"index"}))

router.post("/", async (req, res) => {
    const {name, contact, message} = req.body

    console.log(name, contact, message)
    try{
        const sended = await sendMail({to: contact, subject: `${name} - ${contact}`, text: message})
        return res.send({sended})
    } catch(err) {
        console.log(err)
        return res.send({sended: false})
    }
    
})

module.exports = router