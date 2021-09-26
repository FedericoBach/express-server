const express = require('express')

const booksRoutes = require('./routes/booksRoutes')
const autorsRoutes = require('./routes/autorsRoutes')

const app = express()

app.get("/", (req, res) => res.send("hola mundo"))

app.use("/books", booksRoutes)
app.use("/autors", autorsRoutes)

app.listen(5000, () => console.log("Servidor levantado en el puerto", 5000))