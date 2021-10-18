const multer = require("multer")
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/mnt/c/Users/leandro/Desktop/clases/uploaded')
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})

module.exports.upload = multer({storage: storage})