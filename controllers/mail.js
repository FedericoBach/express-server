//UTILS
const {sendMail} = require("../utils/mail")

module.exports.renderMailController = (req, res) => res.render("mail", {layout:"index"})

module.exports.renderMailAutorController = (req, res) => res.render("mailAutor", {layout:"index"})

module.exports.sendMailController = async (req, res) => {
    const {name, contact, message} = req.body

    console.log(name, contact, message)
    try{
        const sended = await sendMail({to: contact, subject: `${name} - ${contact}`, text: message})
        return res.send({sended})
    } catch(err) {
        return res.send({sended: false})
    }
    
}

module.exports.sendMailAutorController = async (req, res) => {
    const {name, contact, message} = req.body

    console.log(name, contact, message)
    try{
        const sended = await sendMail({to: contact, subject: `${name} - ${contact}`, text: message})
        return res.send({sended})
    } catch(err) {
        return res.send({sended: false})
    }
    
}