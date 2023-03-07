const express = require('express')
const router=express.Router()
const fs =require('fs')


const PATH_ROUTES=(__dirname)
const  removeExtension=(fileName)=>{
    //!TODO tracks.js[tracks,js]
    return fileName.split(".").shift() //! SEPARA TRACKS Y JS
}

 fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name=removeExtension(file) //! TODO users, storage,tracks
    if(name !== "index"){
        console.log("cargando ruta " +name)
        router.use(`/${name}`,require(`./${file}`)) //! TODO https://localhost:300/api/tracks
    }
 })

module.exports= router