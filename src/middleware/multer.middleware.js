import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"./public/temp")
    },
    filename: function (req,file,cb){
        cb(null,file.originalname) // originalname = file will be saved with the same name as user saved it.
    }
})

export const upload = multer({
    storage,
})