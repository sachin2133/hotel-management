import React, { useState,useEffect } from 'react'

import Menu from '@mui/material/Menu';
import Table from 'react-bootstrap/esm/Table';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../action/Action';


export default function Header() {

    const [price, setprice] = useState(0)
    console.log(price);
    const getdata = useSelector((state) => state.cartred.carts)
   
    const dispatch=useDispatch()
const navigate=useNavigate()

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

const dlt=(id)=>{
    dispatch(DLT(id))
}
const total = () => {
    let price = 0
    getdata.map((ele, k) => {
        price = ele.price+price
    });
    setprice(price)
}
useEffect(() => {
    total()
}, [total])



    return (
        <div className='w-full h-16 bg-gray-950 flex justify-between  z-50 fixed '>
            <div className=' w-[20%] h-full flex justify-evenly items-center'>
                <NavLink to="/carddetail/:id">    <span className=' font-bold cursor-pointer  text-slate-100'>ADD TO CART</span></NavLink>
              <NavLink to="/home">  <span className=' font-bold cursor-pointer text-slate-100'>Home</span></NavLink>
            </div>
            <div className=' w-3/6 h-full flex items-center justify-end pr-4 '>
                <div>

                    <svg id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />


                    </svg>

                </div>

                <Menu className='mt-2'
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                >
                    {
                        getdata.length ?

                            <div className='card_details ' style={{ width: "26rem", padding: 10 }}>
                                <Table>
                                    <thead >
                                        <tr  >
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/carddetail/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p className='ml-10 mt-2'>{e.rname}</p>
                                                                <p className='ml-10 mt-2'>Price : ₹{e.price}</p>
                                                                <p className='ml-10 mt-2'>Quantity : {e.qnty}</p>
                                                                <p className='ml-10 mt-2' style={{ color: "red", fontSize: 20, cursor: "pointer" }} >
                                                                  
                                                                </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={()=>dlt(e.id)} >
                                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"  >
                                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                </svg>
                                                            </td>
                                                        </tr>
                                                     
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                                <p className=' border-x-0 border-t-2 border-b-0 mt-4 border border-black w-full'> total=₹{price}</p>

                            </div> :

                            <div >
                                <div className='flex justify-end '>
                                    <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                                <div className='flex p-1'>
                                    <p className='p-2'>your cart is empty</p>
                                    <img className='  w-8 h-10' src='./cart gif.gif' />
                                </div>
                            </div>
                    }
                </Menu>

                <span className=" w-2 h-2 bg-white flex items-center justify-center  rounded-full ml-[-8px] mb-3 p-2   text-[13px] pt-3 "> {getdata.length}   </span>
            </div>



        </div >

    )
}
