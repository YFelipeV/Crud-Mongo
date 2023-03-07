const express = require("express");
const { createItems,getItems} = require("../controllers/storage");
const uphoaldMiddleware = require("../utils/handleStorage");

const router = express.Router();

//!si solo quireo coger archivo utilizo single si no multi
//!myfile es el nombre coloque en potman para enviar el file
router.get("/", getItems);
router.post("/", uphoaldMiddleware.single("myfile"), createItems);

module.exports = router;
