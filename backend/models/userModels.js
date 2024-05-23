const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    number:{type:Number,require:true},
    city:{type:String,require:true},
    password:{type:String,require:true},
    cartData:{type:Object,default:{}}

},{minimize:false})

const userModel=mongoose.models.user || mongoose.model("user",userschema);
module.exports=userModel;