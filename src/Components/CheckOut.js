import React from 'react'
import Subtotal from './Subtotal'
import { useNavigate } from "react-router-dom";
import PaymentInfo from './PaymentInfo';


const CheckOut = ({ itemTotals, priceTotals }) => {
    const navigate = useNavigate();

    const States = [
        '',
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ]

    return (
        <div className="container mt-40 flex flex-col bg-gray-100 ">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shipping</h1>
                    </div>
                    <input type='text' placeholder='First Name' className='border-2 border-gray-300 ml-[9px] mr-[50px] text-2xl h-[50px] w-[359px]'></input>
                    <input type='text' placeholder='Last Name' className='border-2 border-gray-300 text-2xl h-[50px] w-[359px]'></input>

                    <input type='text' placeholder='Street Address' className='mt-10 border-2 border-gray-300  text-2xl h-[50px] w-100 ml-2'></input>
                    <input type='text' placeholder='Apt,Suite, Or Floor(Optional)' className='mt-10 border-2 border-gray-300  text-2xl h-[50px] w-100 ml-2'></input>

                    <div className='justify-between'>
                        <input type='text' placeholder='Zip Code' className='w-[190px] mt-10 mr-[28px] border-2 border-gray-300 text-2xl h-[50px] '></input>
                        <input type='text' placeholder='City' className=' mt-10 mr-[55px] border-2 border-gray-300 text-2xl h-[50px] w-[190px] ml-2'></input>
                        <label className='text-[25px] text-gray-400'>State</label>
                        <select type='text' name='State' className='border-2 border-gray-300 text-2xl h-[60px]  w-60 ml-2 '>
                            {States.map((state) => {
                                return (
                                    <option>{state}</option>)
                            })}
                        </select>
                    </div>
                    <input type='checkbox' className='h-[17px] w-[17px] mt-[15px] mr-[5px]'></input>
                    <label className='text-[20px] mr-[560px] text-black'>Use as billing address</label>
                    <button className="bg-red-500 hover:bg-red-600 px-7 py-2 text-lg text-white uppercase w-[250px] ml-[500px] mt-[20px]" onClick={() => { navigate('/payment') }}>save & continue</button>
                </div>
                <Subtotal itemTotals={itemTotals} priceTotals={priceTotals} />
            </div>

            <div>
                <PaymentInfo />
            </div>

        </div>


    )
}

export default CheckOut