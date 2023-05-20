import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Signuppennal() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const Navigate=useNavigate()
const clickhandle=(e)=>{
    e.preventDefault();
    if(name===''){
        toast.error('name.reqared')
      
}else if(email===''){
    toast.error('email.reqared')
}else if(password===''){
    toast.error('password.reqared')
}else{
   localStorage.setItem("email",JSON.stringify(email))
    localStorage.setItem("password",JSON.stringify(password))

Navigate("/Login")
}


}



    return (
        <div className=' w-full h-screen flex items-center justify-center' style={{ backgroundImage: `url("/christmas.jpg") `, width: "100%", backgroundSize: '100% 100%' }} >
            <div className=' h-[65vh] w-[33%] flex flex-col items-center justify-evenly ' style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <h1 className='   font-semibold text-slate-200 text-center  text-[40px]' >SIGN UP</h1>
                <div className='w-full h-[35vh]  flex  items-center justify-evenly flex-col '>
                    <input value={name} onChange={(e)=>setname(e.target.value)} className='w-[80%] h-[7vh] p-2 rounded bg-slate-300  outline-none' placeholder='Enter Name' ></input>
                    <input value={email} onChange={(e)=>setemail(e.target.value)} className='w-[80%] h-[7vh] p-2 rounded  bg-slate-300 outline-none' type='email' placeholder='Enter Email'></input>
                    <input value={password} onChange={(e)=>setpassword(e.target.value)} className='w-[80%] h-[7vh] p-2 rounded  bg-slate-300 outline-none' type='password' placeholder='Enter Password'></input>
                    <ToastContainer className="  mr-[510px]" />
                </div>
                
                <button className='w-[80%] h-[7vh] bg-blue-700 rounded font-semibold text-[20px] text-slate-200 mb-20' onClick={clickhandle}>Signup</button>
                
            </div>

        </div>
    )
}