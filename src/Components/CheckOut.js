import React from 'react'
import { FaProductHunt } from 'react-icons/fa'

const CheckOut = () => {
    return (

        <div className="container  mt-40 flex flex-col bg-gray-100">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shipping</h1>
                    </div>
                    <input type='text' placeholder='First Name' className='border-2 border-rose-500 mr-[400px] text-3xl h-[60px] w-[400px]'></input>
                    <input type='text' placeholder='Last Name' className='border-2 border-rose-500 text-3xl h-[60px] w-[400px]'></input>
                    <input type='text' placeholder='Street Address' className=' mr-[800px] mt-10 border-2 border-rose-500  text-3xl h-[60px] w-[400px]'></input>
                </div>
            </div>

        </div>

    )
}

export default CheckOut