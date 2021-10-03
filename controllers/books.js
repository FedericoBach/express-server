//MODELS
const {allBooks, bookById, deleteBook} = require("../models/books")
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
            hasBooks:books.books.length ? true: false
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

module.exports.deleteBookController = async (req, res) => {
    const {id} = req.params
    try{
        const book = await deleteBook(id)
        return res.send(book)
    }catch(err){
        return res.send("Se produjo un error")
    }
}