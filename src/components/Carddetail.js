import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT, add, remove } from '../action/Action'

export default function Carddetail() {


    const [data, setdata] = useState([])
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getdata = useSelector((state) => state.cartred.carts)
    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        })
        setdata(comparedata)
    }
    const send = (e) => {
        dispatch(add(e))
    }
    useEffect(() => {
        compare()
    }, [id])
    const dlt = (id) => {
        dispatch(DLT(id));
        navigate("/home")
    }
    const removes = (e) => {
        dispatch(remove(e))
    }
 



    return (
        <>
            <p className='ml-[540px] font-extrabold text-[30px]  fixed'>Items Detail Page</p>
            <div className="w-full h-screen flex  justify-center items-center " >

                <div className='w-3/5 h-[70vh] flex items-center shadow-2xl'>
                    {
                        data.map((ele,key) => {
                            return (
                                <>
                                    <div className='h-3/5 w-1/2 flex  justify-center'>
                                        <img src={ele.imgdata} />
                                    </div>
                                    <div className='w-1/2 h-full flex '>
                                        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                            <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4   font-semibold  "><strong className='text-[15px]'>Restaurent </strong >:{ele.rname}</p>

                                            <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2 font-semibold mt-3"><strong>price </strong>{ele.price}</p>
                                            <p className="text-xs leading-3 text-gray-600 dark:text-white py-4 font-medium mt-3"><strong>Dishes: </strong>{ele.address}</p>
                                            <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white font-extrabold mt-3">Rating:<span className=' bg-green-500 rounded ml-2 p-1'>{ele.rating}</span></p>
                                            <div className="flex items-center justify-between pt-5">
                                                <div className=" flex items-center justify-evenly">
                                                    <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer font-semibold text-[21px]" onClick={() => dlt(ele.id)}>Remove</p>
                                                    <svg className='ml-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16" onClick={() => dlt(ele.id)}>
                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                    </svg>
                                                </div>
                                                <p className=' font-medium'><strong>total: </strong>₹{ele.price*ele.qnty}</p>
                                            </div>
                                            <div className="flex items-center w-full pt-1 ml-6  mt-8">

                                                <span className=' bg-slate-400 rounded flex justify-center mr-3 w-4 h-6 cursor-pointer items-center p-1' style={{ fontSize: 24 }} onClick={ele.qnty <=1 ?()=>dlt(ele,key):() => removes(ele,key)} >-</span>
                                                <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                                <span className=' bg-slate-400 flex justify-center rounded ml-3 w-4 h-6 cursor-pointer p-1 items-center' style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
                                            </div>
                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }


                </div>








            </div>


        </>
    )
}
