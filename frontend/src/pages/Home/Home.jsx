import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreeMenue from '../../components/ExploreMenue/ExploreeMenue'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

function Home() {
    const[category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <ExploreeMenue category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>

    </div>
  )
}

export default Home