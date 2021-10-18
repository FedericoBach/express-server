const express = require("express")

//CONTROLLERS
const {renderUploadImages, uploadImages, getImageById} = require("../controllers/images")

//MIDDLEWARES
const {upload} = require("../middlewares/imagesUpload")

const router = express.Router()

router.get("/lector", renderUploadImages)

router.get("/lector/:id", getImageById)

router.post("/lector", upload.array("pdtc", 2), uploadImages)

module.exports = router