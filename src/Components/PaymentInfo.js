import React from 'react'
import { useNavigate } from "react-router-dom";


const PaymentInfo = () => {
    const navigate = useNavigate();
    return (
        <div className="container mt-40 flex flex-col bg-gray-100 ">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Payment</h1>
                    </div>
                    <input type='text' placeholder='Card Number' className='border-2 border-gray-300 ml-[9px] mr-[20px] text-2xl h-[50px] w-full'></input>
                    <input type='text' placeholder='Exp. Date(MM/YY)' className='mt-10 border-2 border-gray-300  text-2xl h-[50px] w-[300px] ml-2 mr-[375px]'></input>
                    <input type='text' placeholder='CW' className='mt-10 border-2 border-gray-300  text-2xl h-[50px] w-[300px] ml-2 mr-[00px]'></input>

                    {/* <div className='justify-between'>
                        <input type='text' placeholder='Zip Code' className='w-[190px] mt-10 mr-[28px] border-2 border-gray-300 text-2xl h-[50px] '></input>
                        <input type='text' placeholder='City' className=' mt-10 mr-[55px] border-2 border-gray-300 text-2xl h-[50px] w-[190px] ml-2'></input>
                        <label className='text-[25px] text-gray-400'>State</label>

                    </div> */}
                    <input type='checkbox' className='h-[17px] w-[17px] mt-[15px] mr-[600px]'></input>
                    <label className='text-[20px] mr-[560px] text-black'>Use as billing address</label>
                    <button className="bg-red-500 hover:bg-red-600 px-7 py-2 text-lg text-white uppercase w-[250px] ml-[500px] mt-[20px]">save & continue</button>
                </div>

            </div>
        </div>
    )
}

export default PaymentInfo