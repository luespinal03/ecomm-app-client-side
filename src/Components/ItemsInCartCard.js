import React from 'react'
import { useNavigate } from "react-router-dom";


const ItemsInCartCard = ({ product, itemToShoppingCart, removeItemFromCartHandler, removeItemHandler }) => {

    // const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20">

                    <img className="w-100" src={product.image} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-m">{product.title}</span>
                    <span className="text-red-500 text-m">{product.brand}</span>
                    <a href="#" className="border-hidden font-semibold hover:text-red-500 text-gray-500 text-sm " onClick={() => { removeItemHandler(product) }}>Remove</a>
                </div>
            </div>
            {/* {console.log(product.cartCount)} */}
            <div className="flex justify-center w-1/5">



                <button className='minus-button' onClick={() => {
                    removeItemFromCartHandler(product)
                }}>-</button>


                <input className="mx-2 border text-center w-8" type="text" value={product.cartCount} />

                <button className='plus-button' onClick={() => {
                    itemToShoppingCart(product)
                    // setQuantity(product.cartCount)
                }}
                >+</button>

            </div>
            <span className="text-center w-1/5 font-semibold text-m">{`$${product.price}`}</span>
            <span className="text-center w-1/5 font-semibold text-m">{`$${(product.cartCount * product.price).toFixed(2)}`}</span>
        </div>
    )
}

export default ItemsInCartCard