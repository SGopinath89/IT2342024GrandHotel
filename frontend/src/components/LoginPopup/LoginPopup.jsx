import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")
    const [data,setData]=useState({
        name:"",
        number:"",
        city:"",
        email:"",
        password:""
    })
     
    const onChangeHandler=(event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))


    }
    

    useEffect(()=>{
        console.log(data)
    },[data])
    return (
        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currState === "Sign Up" && (
                        <>
                            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />
                            <input  name='number' onChange={onChangeHandler} value={data.number}  type="text"placeholder='Your number' required />
                            <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='Your city' required />
                        </>
                    )}

                    <input name='email' onChange={onChangeHandler} value={data.email}type="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By continuing,i agree to policy</p>
                </div>
                {currState === "Login"
                    ? <p>Creat a new account?<span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account?<span onClick={() => setCurrState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPopup