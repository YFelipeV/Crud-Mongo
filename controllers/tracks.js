const{TracksModel}=require("../models")
//!obtener lista de base datos
const getItems= async(req,res)=>{
 const data = await TracksModel.find({})
 res.json(data)
}
const getItem=(req,res)=>{

}
const createItems= async(req,res)=>{
    const {body}=req
     const data=await TracksModel.create(body)
    res.json(data)

}
const updateItems=(req,res)=>{

}
const deleteItems=(req,res)=>{

}

module.exports={getItems,createItems,deleteItems,getItem,updateItems}