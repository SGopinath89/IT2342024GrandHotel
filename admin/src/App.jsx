import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
const App = () => {
  const url = "http://localhost:8080";
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
      <Routes>
        <Route path='/add' element={<Add url={url}/ >}/>
        <Route path='/list' element={<List url={url}/>}/>
        <Route path='/orders' element={<Orders url={url}/>}/>
      </Routes>
      </div>


    </div>
  )
}

export default App