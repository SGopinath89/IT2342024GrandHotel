import React, { useEffect, useState } from 'react';
import './List.css';
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
   // const url = "http://localhost:8080";
    const [list, setList] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            console.log(response.data);
            if (response.data.success) {
                setList(response.data.date); // Update this line
                console.log("List:", response.data.date); // Modify this line
            } else {
                toast.error("Error fetching data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Error fetching data");
        }
    }

    const removefood=async(foodId)=>{
        const response=await axios.post(`${url}/api/food/remove`,{id:foodId})
        await fetchList() 
    }
    
    useEffect(() => {
        fetchList();
    }, []);
    

    return (
        <div className='list and flex-col'>
            <p>Food list</p>
            <div className='list-table'>
                <div className='list-table-format title'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                
                {list && list.length > 0 ? (
                    list.map((item, index) => (
                        <div key={index} className='list-table-format'>
                            <img src={`${url}/images/` + item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={()=>removefood(item._id)} className='remove'>X</p>
                        </div>
                    ))
                ) : (
                    <p>No items found</p>
                )}
            </div>
        </div>
    );
}

export default List;
