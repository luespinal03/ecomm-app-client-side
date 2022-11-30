import React from 'react'
import ShoppingCartCard from '../Components/ShoppingCartCard'
import ProceedToOrder from '../Components/ProceedToOrder'


const ShoppingCart = ({ shoppingCart }) => {
    if (shoppingCart.length === 0) {
        return (<h3>Your Shopping Cart is Empty</h3>)
    } else if (shoppingCart.length > 0) {
        return <div>
            {shoppingCart.map((product, index) => {
                return <ShoppingCartCard key={index} product={product} />
            })}
            <ProceedToOrder /></div>
    }
}

export default ShoppingCart
