const foodModel=require('../models/foodmodel.js')
const fs=require('fs')

//add food items

const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    } 
    catch(error){
        console.log(error) 
        res.json({success:false,message:"Error"})
    }


}

//get food list

const Foodlist=async(req,res)=>{
    try{
        const foods=await foodModel.find({})
        res.json({success:true,date:foods})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

//remove item

const removefood=async (req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`upload/${food.image}`,(error)=>{
            if(error){
                console.error('Error deleting image:',error)
            }
            else{
                console.log('Image deleted successfully')
            }
        })

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food removed"})

    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})

    }
}

module.exports={
    addFood,
    Foodlist,
    removefood
}