import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../pages/Cart/Cart'

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home")
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
            <button onClick={()=>setShowLogin(true)}>sign in</button>

        </div>
    </div>
  )
} 

export default Navbar