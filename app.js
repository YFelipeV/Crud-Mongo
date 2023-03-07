const express =require( 'express')
const dotenv= require( 'dotenv').config()
const cors =require( 'cors')
const dbConnect =require( './config/mongo.js')

const app=express()


app.use(cors())
app.use(express.json())
app.use(express.static("storage"))
const port= process.env.PORT || 3000

app.use("/api",require("./routes/index"))



app.listen(port,()=>{
    console.log("http://localhost:"+port)
})


dbConnect();