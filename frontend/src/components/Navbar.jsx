import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../pages/Cart/Cart'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home")
    const{token,setToken}=useContext(StoreContext)
    
    const navigate=useNavigate();
    
    const logout=()=>{
      localStorage.removeItem("token")
      setToken("")
      navigate("/home")


    }
  return (
    
    <div class='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <ul className="navbar-menu">
        <a href='' onClick={()=>setMenu("home")}className={menu==="home"?"active":""}><Link to='/Home'>Home</Link></a>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><Link to='#explore-menu'>Menu</Link></a>
        <a href='' onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}><Link to='/about-us'>About us</Link></a>
        </ul>
        <div className='navbar-right'>
          
            <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
            {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className='navbar-profile'>
                <img src={assets.profile_icon} alt=""/>
                <ul className="nav-profile-dropdown">
                  <li><img src={assets.bag_icon} alt=""/><p>Orders</p></li>
                  <hr />
                  <li onClick={logout}><img src={assets.logout_icon} alt=""/><p>Logout</p></li>
                </ul>
              </div>}

            

        </div>
    </div>
  )
} 

export default Navbar