const express = require('express')

const router = express.Router()

router.get("/lector", (req, res) => {
    res.cookie('session', '', {maxAge: 1})

    res.redirect("/signin/lector")
})

router.get("/autor", (req, res) => {
    res.cookie('session', '', {maxAge: 1})

    res.redirect("/signin/autor")
})


module.exports = router