const mongoose = require('mongoose')

const StorageScheme= new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        },
        
    },
    {

        timestamps:true, //!esto  sirve para las fechas 
        versionKey:false
    }
)

module.exports= mongoose.model("storages",StorageScheme)