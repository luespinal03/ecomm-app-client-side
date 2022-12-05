import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ItemsInCartCard = ({ product }) => {

    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className="w-100" src={product.image} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{product.title}</span>
                    <span className="text-red-500 text-sm">{product.brand}</span>
                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-sm">Remove</a>
                </div>
            </div>
            <div className="flex justify-center w-1/5">

                <button className='minus-button' onClick={() => {
                    if (quantity > 0) {
                        const minusCount = quantity - 1
                        setQuantity(minusCount)
                    }
                }}>-</button>

                <input className="mx-2 border text-center w-8" type="text" value={quantity} />

                <button className='plus-button' onClick={() => {
                    const addCount = quantity + 1
                    setQuantity(addCount)
                }}
                >+</button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{product.price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">{product.price}</span>
        </div>
    )
}

export default ItemsInCartCard