import React, { useState } from 'react'
import Cardsdata from './Carddata'
import { useDispatch } from 'react-redux'
import { add } from '../action/Action'
export default function Card() {

const dispatch=useDispatch()

const send=(e)=>{
  dispatch(add(e))
}

    const [data, setdata] = useState(Cardsdata)
   
    return (

        <div className='w-full h-auto grid grid-cols-3 grid-rows-auto sticky  gap-4 pl-8 mt-20 '>

            {
                data.map((element, id) => {
                    return (
                        <>

                            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

                                <div className="relative mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                                    <img
                                        src={element.imgdata}
                                    />
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {element.address}
                                    </h5>
                                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        price:₹{element.price}
                                    </p>
                                </div>
                                <div className="p-6 pt-0 ">
                                    <button onClick={()=>send(element)}
                                        className="select-none rounded-lg w-full bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>


                        </>
                    )
                })


            }

        </div>

    )
}
