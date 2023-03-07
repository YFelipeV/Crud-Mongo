const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(`${__dirname}/../storage`);
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    //!mi cv.pdf mifoto.png
    const ext = file.originalname.split(".").pop(); //todo [name,"png"]
    const filename = `file${Date.now()}.${ext}`;
    cb(null, filename);
  },
});
const uphoaldMiddleware = multer({
  storage,
});

module.exports = uphoaldMiddleware;
