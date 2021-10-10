const {signinLector} = require("../models/signin")

//UTILS
const {generateCookieDaysDurationInMs} = require("../utils/time")
const {createToken} = require("../utils/token")

module.exports.renderSigninLectorController = (req, res) => {
    return res.render("signinLector", {layout: "index"})
}

module.exports.signinLectorController = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await signinLector(email, password)
        if(user.existUser){
            res.cookie("session", createToken(user), {
                maxAge: generateCookieDaysDurationInMs(3),
            })
    
            return res.status(200).send(user)
        } else {
            return res.status(200).send(user)
        }
    }catch(err){
        return res.status(500).send("Se produjo un error al registrarse")
    }
}