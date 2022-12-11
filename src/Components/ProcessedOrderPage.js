import React from 'react'


const ProcessedOrderPage = () => {
    return (
        <div className="container mt-40 flex flex-col bg-gray-100 ">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shipping</h1>

                    </div>

                    <input type='checkbox' className='h-[17px] w-[17px] mt-[15px] mr-[5px]'></input>
                    <label className='text-[20px] mr-[560px] text-black'>Use as billing address</label>
                </div>
            </div>

        </div>

    )
}

export default ProcessedOrderPage