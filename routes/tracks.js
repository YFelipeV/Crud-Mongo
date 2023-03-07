const express = require('express')
const {getItems,createItems }=require("../controllers/tracks")
const {validatorCreateItem }=require("../validators/tracks")
const router=express.Router() 


router.get("/",getItems)
router.post("/",validatorCreateItem,createItems)



module.exports=router