const userModel=require('../models/userModels.js')
const jwt =require('jsonwebtoken')
const bcrypt=require('bcrypt')
const validator=require('validator')

//login

const loginUser=async (req,res) =>{




}

const createToken =(id)=> {
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user

const registerUser=async (req,res) =>{
    const {name,email,number,city,password}=req.body;
    try{
        //checking user already exits
        const exists=await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User already exits"})

        }
        //validating emali format and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"please enter more than 8 character strong password"})

        }

        //hashing user password

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const newUser=new userModel({
            name:name,
            email:email,
            number:number,
            city:city,
            password:hashedPassword
        })

        //save user in data base
        const user =await newUser.save()
        const token=createToken(user._id)
        res.json({success:true,token})

    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

module.exports={
    loginUser,
    registerUser
}