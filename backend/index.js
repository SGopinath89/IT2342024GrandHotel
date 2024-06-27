const express=require('express')
const cors=require('cors')
const app=express()
const port=8080

const connectDB=require('./config/db.js');
const foodrouter = require('./routes/foodroute.js');
const userRouter = require('./routes/userroute.js');
const cartRouter=require('./routes/cartRouter.js')
require('dotenv').config();
//db connection
connectDB();

//middleware
app.use(express.json())
app.use(cors())

//api endpoint
app.use("/api/food",foodrouter)
app.use("/images",express.static('upload'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.listen(port,()=>{
    console.log("The api is running on port",port)
}) 

//mongodb+srv://Grandhotel:12345678ab@cluster0.msxq58x.mongodb.net/?