const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
    await mongoose.connect('mongodb+srv://Grandhotel:NUXZXv1I49JsbuK6@cluster0.msxq58x.mongodb.net/IT2342024GrandHotel');
    console.log("DB connected")
    }
    catch(error){
        console.error("Failed to cennect to Mondodb:",error);
    }

}

module.exports=connectDB;