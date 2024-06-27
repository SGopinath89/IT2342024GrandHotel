import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <div className="nav_links">
        
        <NavLink to='/List' className='nav-link'>List Items</NavLink>
        <NavLink to='/Add' className='nav-link'>Add Items</NavLink>
        </div>
    </div>
  )
}

export default Navbar