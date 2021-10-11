module.exports.requiresLoginMiddleware = (req, res, next) => {
    const {session} = req.cookies

    if(!session){
        return res.redirect("/signin/lector")
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