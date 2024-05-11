 const express=require('express')
 const addFood=require('../controllers/foodcontroller.js')
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




 module.exports=foodrouter