const mongoose =require( 'mongoose')

const TracksScheme= new mongoose.Schema(
    {
        name:{
            type:String
        },
        album:{
            type:String
        },
        cover:{
            type:String,
            validate:{
                validator:(req)=>{
                    return true
                },
                message:"EROR:URL",
            },
        },
        artist:{
            name:{
                type:String,
            },
            nickname:{
                type:String,
            },
            nationality:{
                type:String
            },
           
        },
        duracion:{
            start:{
                type:Number,
            },
            end:{
                type:Number,
            },
        },
        mediaId:{
            type:mongoose.Types.ObjectId,

        },
    },
    {

        timestamps:true, //!esto  sirve para las fechas 
        versionKey:false
    }
)

module.exports= mongoose.model("tracks",TracksScheme)