const express = require('express')
const app = express()

//////////////////// seteando el motor de plantillas handlebars
const handlebars = require('express-handlebars').create({defaultLayout: 'index' , extname: '.hbs'});
////////////////////

const booksRoutes = require('./routes/booksRoutes')   // rutas hechas mudulo
const autorsRoutes = require('./routes/autorsRoutes')



/////////////////////////////////////// seteando el motor de plantillas handlebars
app.engine( '.hbs' , handlebars.engine);
app.set('view engine', 'hbs')
//////////////////////////////////////


app.get("/", (req, res) => res.send("hola mundo"))

app.use("/books", booksRoutes)
app.use("/autors", autorsRoutes)

const port = 5000
app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`))