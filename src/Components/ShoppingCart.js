import React from 'react'
import ShoppingCartCard from './ShoppingCartCard'
import OrderSummary from './OrderSummary'


const ShoppingCart = ({ shoppingCart }) => {
    if (shoppingCart.length === 0) {
        return (<h3>Your Shopping Cart is Empty</h3>)
    } else if (shoppingCart.length > 0) {
        return <div>
            {shoppingCart.map((product, index) => {
                return <ShoppingCartCard key={index} product={product} />
            })}
            <OrderSummary />
        </div>
    }
}

export default ShoppingCart
