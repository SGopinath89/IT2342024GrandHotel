import React from 'react'
import './ExploreeMenue.css'
import { menu_list } from '../../assets/assets'
function ExploreeMenue({category,setCategory}) {
  return (
    <div>
        <div className='explore-menu' id='explore-menue'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-list'>Your favorite Food,Delivered fast</p>
            <div className='explore-menu-list'>
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default ExploreeMenue