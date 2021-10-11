//MODELS
const {allBooks, bookById, deleteBook, createBook, updateBook} = require("../models/books")
module.exports.allBooksController = async (req, res) => {
    try{
        const books = await allBooks()
        return res.send(books)
    }catch(err){
        return res.send("Se produjo un error")
    }
}

module.exports.renderBooksController = async (req, res) => {
    try{
        const books = await allBooks()
        return res.render("books", {
            layout:"index", 
            books: books.books, 
            hasBooks:books.books.length ? true: false,
            shouldRenderLogout: true,
            redirectPath: "/logout/lector"
        })
    }catch(err){
        return res.send("Se produjo un error")
    }
}

module.exports.bookByIdController = async (req, res) => {
    const {id} = req.params
    try{
        const book = await bookById(id)
        return res.send(book)
    }catch(err){
        return res.send("Se produjo un error")
    }
}

module.exports.createBookController = async (req, res) => {
    const {name, publish_date, disponible} = req.body
    try{
        const book = await createBook({name, publish_date, disponible})
        return res.send(book)
    } catch(err) {
        return res.send("Se produjo un error")
    }
}

module.exports.updateBookController = async (req, res) => {
    const {id, name, publish_date, disponible} = req.body

    try{
        const book = await updateBook({id, name, publish_date, disponible})
        return res.send(book)
    } catch(err) {
        return res.send("Se produjo un error")
    }
}

module.exports.deleteBookController = async (req, res) => {
    const {id} = req.params
    try{
        const book = await deleteBook(id)
        return res.send(book)
    }catch(err){
        return res.send("Se produjo un error")
    }
}