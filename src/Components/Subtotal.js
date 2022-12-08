import React from 'react'
import { useNavigate } from "react-router-dom";

const Subtotal = ({ itemTotals, priceTotals }) => {
    const navigate = useNavigate
    return (
        <div id="summary" className="w-2/4 px-8 py-10 bg-gray-100">
            <h1 className="font-semibold text-2xl border-b pb-8">Subtotal</h1>
            <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-m uppercase">Items {itemTotals}</span>
                <span className="font-semibold text-m">{`$${priceTotals.toFixed(2)}`}</span>
            </div>
            <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <span className="block p-2 text-gray-600 w-full text-sm">
                    Standard shipping - $10.00
                </span>
            </div>
            {/* <div className="py-10">
                <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button> */}


            <div className="">
                <div className="flex font-semibold justify-between py-4 text-lg uppercase">
                    <span>Total cost</span>
                    <span>{`$${priceTotals.toFixed(2)}`}</span>
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-7 py-2 text-lg text-white uppercase w-full" onClick={() => { navigate('/checkout') }}>Place Order  {`$${priceTotals.toFixed(2)}`}</button>
            </div>
        </div>
    )
}

export default Subtotal