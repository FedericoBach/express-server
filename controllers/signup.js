const {signupLector} = require("../models/signup")


module.exports.renderSignupLectorController = (req, res) => {
    return res.render("signupLector", {layout: "index"})
}

module.exports.signupLectorController = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await signupLector(email, password)
        console.log(user)
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send("Se produjo un error al registrarse")
    }
}