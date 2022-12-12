import React from 'react'
import { useAuth } from "../Hooks/Auth";
import './OrderSummary.css'
import { useNavigate } from "react-router-dom";



const OrderSummary = ({ itemTotals, priceTotals, setRecentlyProcessedOrder }) => {
    const auth = useAuth()
    const navigate = useNavigate();


    const routeOptionHandler = () => {
        /*auth.userEmail !== null && */ auth.userEmail.length > 0 ? navigate('/checkout') : navigate('/checkoutoptions')
    }



    return (
        <div id="summary" className="w-1/4 px-8 py-10 bg-gray-100 w-50">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-m uppercase">Items {itemTotals}</span>
                <span className="font-semibold text-m">{`$${priceTotals.toFixed(2)}`}</span>
            </div>
            <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                </select>
            </div>
            <div className="py-10">
                <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>


            <div className="">
                <div className="flex font-semibold justify-between py-4 text-m uppercase">
                    <span>Total cost</span>
                    <span>{`$${priceTotals.toFixed(2)}`}</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 px-5 py-4 text-sm text-white uppercase w-full" onClick={() => { routeOptionHandler() }}>Proceed to Checkout</button>
            </div>
        </div>

    )
}

export default OrderSummary