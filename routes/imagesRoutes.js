const express = require("express")

//CONTROLLERS
const {
    renderUploadImages, 
    uploadImages, 
    getImageById,
    renderUploadImagesAutor,
    uploadImagesAutor,
    getImageByIdAutor
} = require("../controllers/images")

//MIDDLEWARES
const {upload} = require("../middlewares/imagesUpload")

const router = express.Router()

router.get("/lector", renderUploadImages)

router.get("/lector/:id", getImageById)

router.post("/lector", upload.array("pdtc", 2), uploadImages)


router.get("/autor", renderUploadImagesAutor)

router.get("/autor/:id", getImageByIdAutor)

router.post("/autor", upload.array("pdtc", 2), uploadImagesAutor)

module.exports = router