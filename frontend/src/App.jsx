import React, { useState } from 'react';
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import Cart from './pages/cart/cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup  setShowLogin={setShowLogin}/>:<></>}
    
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
