import React,{useContext} from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

    const{cartItems,food_list,removeFromCart,getTOtalCartAmount}=useContext(StoreContext) 
  return (
    <div className='cart'>
        <div className="cart-items">
            <div className="cart-items-title">
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item,index)=>{
                if(cartItems[item._id]>0)
                    {
                        return(
                            <div className="cart-items-title cart-items-item ">
                                 <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>{item.price*cartItems[item._id]}</p>
                                <p onClick={()=>removeFromCart(item._id)}className='cross'>X</p>
                               
                            </div>   
                        )
                    }
            })}
        </div> 
        <div className="cart-bottom">
            <div className="cart-total">
                <h2>Cart Totals</h2>
                <div>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>RS {getTOtalCartAmount()}.00</p>
                    </div>
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>RS {200}.00</p>
                    </div>
                    <hr/>
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>RS {getTOtalCartAmount()+200}.00</b>
                    </div>
                </div>
                <button>Proceed </button>
            </div>
        </div>
       
    </div>
  )
}

export default Cart