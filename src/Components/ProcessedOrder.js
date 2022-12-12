import React from 'react'


const ProcessedOrder = ({ recentlyProcessedOrder, priceTotals }) => {
    return (
        <div className="container mt-40 flex flex-col bg-gray-100 ">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className=" border-b pb-8">
                        <h1 className="font-semibold text-2xl">Your order was processed successfully</h1>
                        <h1 className="font-semibold text-2xl">{`Order Number: ${Math.floor(Math.random() * 1000)}`}</h1>
                    </div>
                    <div>

                        {console.log(recentlyProcessedOrder)}
                        {recentlyProcessedOrder.map((product, index) => {
                            return (
                                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                    <div className="flex w-2/5">
                                        <img className="w-100" src={product.image} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-m">{product.title}</span>
                                        <span className="text-red-500 text-m">{product.brand}</span>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-m">{`$${product.price}`}</span>
                                    <span className="text-center w-1/5 font-semibold text-m">{`$${(product.cartCount * product.price).toFixed(2)}`}</span>
                                </div>
                            )
                        })}

                    </div>
                    <p>Order Total: {priceTotals}</p>
                </div>
            </div>

        </div>

    )
}

export default ProcessedOrder