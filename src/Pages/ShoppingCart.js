import React from 'react'
import ShoppingCartCard from '../Components/ShoppingCartCard'

const ShoppingCart = ({ shoppingCart }) => {
    if (shoppingCart.length === 0) {
        return (<h3>Your Shopping Cart is Empty</h3>)
    } else if (shoppingCart.length > 0) {
        return <div>
            {shoppingCart.map((product, index) => {
                return <ShoppingCartCard key={index} product={product} />
            })}
        </div>

    }

}

export default ShoppingCart



    // < h1 > Products</ >
    //     <div>{itemsList.map((product, index) => {
    //         return <ProductsCard key={index} product={product} itemToShoppingCart={itemToShoppingCart} />
    //     })}</div>