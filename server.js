const express = require('express')

const booksRoutes = require('./routes/booksRoutes')

const app = express()

app.use("/static", express.static(__dirname + "/public"))

app.get("/", (req, res) => res.send("hola mundo"))

app.use("/books", booksRoutes)

app.listen(5000, () => console.log("Servidor levantado en el puerto", 5000))