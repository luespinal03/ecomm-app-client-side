import React from 'react'


const ProcessedOrder = ({ recentlyProcessedOrder, priceTotals }) => {
    return (
        <>
            <div className="container mt-40 flex flex-col bg-gray-100 ">
                <div className="flex shadow-md my-10">
                    <div className="w-full bg-white px-10 py-10">
                        <div className=" border-b pb-8">
                            <h1 className="font-semibold text-2xl">Your order was processed successfully</h1>
                            <h1 className="font-semibold text-2xl">{`Order Number: ${Math.floor(Math.random() * 10000)}`}</h1>
                        </div>
                        <div className="flex mt-10 mb-5 ml-12 w-full">
                            <h3 className="font-semibold text-gray-600 text-sm uppercase w-2/5 ml-10">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-sm uppercase w-1/5 ">Qty</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-sm uppercase w-1/5 mr-[25px]">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-sm uppercase w-1/5 mr-[155px]">Total</h3>
                        </div>
                        <div>

                            {console.log(recentlyProcessedOrder)}
                            {recentlyProcessedOrder.map((product, index) => {
                                return (
                                    <div key={index} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 w-full">
                                        <img className="w-40" src={product.image} alt="" />

                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-m ">{product.title}</span>
                                            <span className="text-red-500 text-m">{product.brand}</span>
                                        </div>

                                        <div className="flex w-1/5 pl-[12%] pb-[5%]  ">
                                            {/* <img className="w-40" src={product.image} alt="" /> */}
                                            <p className="mx-2 w-8 mt-[60px]" >{product.cartCount}</p>
                                        </div>

                                        <span className="text-center w-1/5 font-semibold text-lg">{`$${product.price}`}</span>
                                        <span className="text-center w-1/5 font-semibold text-lg mr-[30px]">{`$${(product.cartCount * product.price).toFixed(2)}`}</span>
                                    </div>
                                )
                            })}

                        </div>
                        <div className='bg-blue-400'>
                            <h1 className="font-semibold text-3xl mt-40 pt-10 underline">Order Total: ${priceTotals}</h1>
                            <h3 className='pb-10'>Thank you for shopping with us !</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProcessedOrder