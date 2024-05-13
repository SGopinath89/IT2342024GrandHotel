import React, {  useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"

const Add = () => {

    const url ="http://localhost:8080"
    const [image,setImage]=useState(false)
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        categoty:"salad"
    })

    const onChangeHandler=(event) =>{
        const name= event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const formData =new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price", parseInt(data.price));
        formData.append("category",data.categoty)
        formData.append("image",image)

        const response=await axios.post(`${url}/api/food/add`,formData)
        
        if(response.data.success){ 
            setData({
                name:"",
                description:"",
                price:"",
                categoty:"salad"
            })
            setImage(false)
        }
        else{
            toast.error(response.data.message)

        }
    }



  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image:</p>
                <label htmlFor='image'>
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e )=>setImage(e.target.files[0])} type="file" id="image" hidden required />

            </div>
            <div className="add-product-name flex-col">
                <p>Product name:</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' />

            </div>
            <div className="add-product-description flex-col">
                <p>Product description:</p>
                <textarea onChange={onChangeHandler} value={data.description}name="description" row="7" />
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category:</p>
                    <select onChange={onChangeHandler} name='category'>
                        <option value="salad">salad</option>
                        <option value="noodles">noodles</option>
                        <option value="deserts">deserts</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Producr price:</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add