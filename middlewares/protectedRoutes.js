module.exports.requiresLoginMiddleware = (req, res, next) => {
    const {session} = req.cookies

    if(!session){
        return res.redirect("/signin/lector")
    } else {
        next()
    }
}

module.exports.requiresAutorLoginMiddleware = (req, res, next) => {
    const {session} = req.cookies

    if(!session){
        return res.redirect("/signin/autor")
    } else {
        next()
    }
}

module.exports.redirectLoguedUserMiddleware = (req, res, next) => {
    const {session} = req.cookies

    if(session){
        return res.redirect("/books/render")
    } else {
        next()
    }
}

module.exports.redirectLoguedAutorMiddleware = (req, res, next) => {
    const {session} = req.cookies

    if(session){
        return res.redirect("/autors/render")
    } else {
        next()
    }
}