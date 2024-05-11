const express=require('express')
const app=express()
const port=8080

const connectDB=require('./config/db.js')

//db connection
connectDB();

app.listen(port,()=>{
    console.log("The api is running on port",port)
}) 

//mongodb+srv://Grandhotel:12345678ab@cluster0.msxq58x.mongodb.net/?