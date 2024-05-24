import React,{useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItems from '../FoodItems/FoodItems'

const FoodDisplay=(category)=> {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>oreder your favorite food</h2>
        <din className="food-display-list">
            {food_list.map((item,index)=>{
                return <FoodItems key={index} id={item._id}  name={item.name} description={item.description} price={item.price} image={item.image}/>
            })}
        </din>
    </div>
  )
}

export default FoodDisplay