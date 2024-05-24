import React from 'react';
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import Cart from './pages/cart/cart';
const App = () => {
  return (
    
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        
      </div>
    
  );
}

export default App;
