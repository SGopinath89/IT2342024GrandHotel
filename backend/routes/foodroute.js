 const express=require('express')
 const {addFood,Foodlist}=require('../controllers/foodcontroller.js')
// const Foodlist=require('../controllers/foodcontroller.js')
 const multer=require('multer')

 const foodrouter=express.Router();

 //image uplode

 const storage=multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
 })

 const upload =multer({storage:storage})


foodrouter.post("/add",upload.single("image"),addFood)

foodrouter.get("/list",Foodlist)



 module.exports=foodrouter