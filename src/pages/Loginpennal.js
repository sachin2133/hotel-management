import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Loginpennal() {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const emai= JSON.parse(localStorage.getItem("email"))
    const pass=  JSON.parse(localStorage.getItem("password"))

    const navigate=useNavigate();
    const clickhandle=()=>{
        if(email===""){
            toast.error('email.reqared')
        }
        else if(password===""){
            toast.error('password.reqared')
        }else if(email===emai && password===pass){
           
            toast.success('login succes')
            navigate("/home")
        }else if(email!=emai){
            toast.error('invaild email')
        }else if(password!=pass){
            toast.error('invaild password')
        }
    }

    return (
        <div className=' w-full h-screen flex items-center justify-center' style={{ backgroundImage: `url("/christmas.jpg") `, width: "100%", backgroundSize: '100% 100%' }}>
            <div className=' h-[65vh] w-[33%] flex flex-col items-center justify-evenly ' style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <h1 className='   font-semibold text-slate-200 text-center  text-[40px]' >Log in</h1>
                <div className='w-full h-[28vh]  flex  items-center justify-evenly flex-col '>
                    <input value={email}onChange={(e)=>setemail(e.target.value)} className='w-[80%] h-[8vh] p-3 rounded bg-slate-300  outline-none' type='email' placeholder='Email'></input>
                   
                    <input value={password} onChange={(e)=>setpassword(e.target.value)} className='w-[80%] h-[8vh] p-3 rounded  bg-slate-300 outline-none' type='password' placeholder='password'></input>
                    <ToastContainer className="  mr-[510px]" />
                </div>
                <div className=' w-[80%] h-[20vh]  flex flex-col  items-end    '>
                    <button className='w-[100%] h-[8vh] bg-blue-700 rounded font-semibold text-[20px] ' onClick={clickhandle}>Login</button>
                    <NavLink to="/" className=' text-slate-200 mr-1 mt-3 cursor-pointer font-medium  hover:text-slate-100'>Signup?<span className='ml-2 font-medium  hover:text-blue-600'>forgot password</span></NavLink>
                </div>
            </div>
        </div>
    )
}
