const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        // console.log(file + ' file.mimeType');
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        console.log(path)
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});


const upload = multer({
    storage : storage,
    limits : {
        fileSize : 1024*1024*10
    },
    

});

module.exports = {
    upload : upload
}