const express = require('express')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')

const booksRoutes = require('./routes/booksRoutes')
const autorsRoutes = require('./routes/autorsRoutes')
const signupRoutes = require('./routes/signupRoutes')
const signinRoutes = require('./routes/signinRoutes')
const logoutRoutes = require('./routes/logoutRoutes')
const mailRoutes = require(('./routes/mailRoutes'))

const app = express()

app.use(express.json())
app.use(cookieParser())

app.set('view engine', 'hbs')

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
    extname: 'hbs'
}))

app.get("/", (req, res) => res.send("hola mundo"))

app.use("/signup", signupRoutes)
app.use("/signin", signinRoutes)
app.use("/books", booksRoutes)
app.use("/autors", autorsRoutes)
app.use("/mail", mailRoutes)
app.use("/logout", logoutRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => console.log("Servidor levantado en el puerto", PORT))