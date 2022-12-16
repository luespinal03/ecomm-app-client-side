import React from 'react'
import { useAuth } from '../Hooks/Auth'
import { useNavigate } from "react-router-dom";

const Subtotal = ({ itemTotals, priceTotals, disabled, setRecentlyProcessedOrder, checkOutInfo }) => {
    const notDisabledClass = 'bg-red-500 hover:bg-red-600 px-7 py-2 text-lg text-white uppercase w-full'
    const disabledClass = 'bg-gray-600 hover:bg-gray-600 hover:cursor-not-allowed  px-7 py-2 text-lg text-white uppercase w-full'
    const navigate = useNavigate()
    const auth = useAuth();

    const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT




    const savingPurchasedItems = async () => {
        // console.log(checkOutInfo)

        const recentOrder = {
            user: auth.userEmail,
            // checkOutInfo holds first name, last name and address of current user.
            ...checkOutInfo,
            itemTotals,
            priceTotals,
        }
        // console.log(recentOrder)

        const url = `${urlEndpoint}/users/checkout`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recentOrder
            }),
        });
        const responseJSON = await response.json();
        console.log(responseJSON)

        console.log(recentOrder)
        setRecentlyProcessedOrder(checkOutInfo.purchases)
        navigate('/processedorderpage')

    }




    return (
        <div id="summary" className=" w-2/4 px-8 py-10 bg-gray-100">
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

                    {/* "bg-red-500 hover:bg-red-600 px-7 py-2 text-lg text-white uppercase w-full"  */}
                </div>
                <button className={`${disabled ? disabledClass : notDisabledClass}`} disabled={disabled} onClick={savingPurchasedItems}>Place Order  {`$${priceTotals.toFixed(2)}`}</button>
            </div>
        </div>
    )
}

export default Subtotal