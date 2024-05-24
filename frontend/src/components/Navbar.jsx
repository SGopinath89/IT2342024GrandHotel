import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu]=useState("home")
  return (
    
    <div class='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")}className={menu==="home"?"active":""}><Link to='/Home'>Home</Link></li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><Link to='/menue'>Menu</Link></li>
        <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}><Link to='/about-us'>About us</Link></li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.basket_icon} alt=''/>
            <button>sign in</button>

        </div>
    </div>
  )
} 

export default Navbar