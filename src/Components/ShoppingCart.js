import React from 'react'
import ShoppingCartCard from './ShoppingCartCard'
// import OrderSummary from './OrderSummary'
import Footer from './Footer'
// import './ShoppingCart.css'


const ShoppingCart = ({ setRecentlyProcessedOrder, shoppingCart, quantity, setQuantity, itemToShoppingCart, removeItemFromCartHandler, itemTotals, priceTotals, removeItemHandler }) => {
    if (shoppingCart.length === 0) {
        return (<div>
            <div>
                <h3 className='mt-40 ml-20'>Your Shopping Cart is Empty</h3>
            </div>


            <div className='w-screen mt-[83.6rem]'>
                <Footer />
            </div>

        </div>)
    }
    else if (shoppingCart.length > 0) {
        return <div>
            <div>
                <ShoppingCartCard setRecentlyProcessedOrder={setRecentlyProcessedOrder} shoppingCart={shoppingCart} quantity={quantity} setQuantity={setQuantity} itemToShoppingCart={itemToShoppingCart} removeItemFromCartHandler={removeItemFromCartHandler} itemTotals={itemTotals} priceTotals={priceTotals} removeItemHandler={removeItemHandler} />
            </div>

            <div className='mt-[38.9rem] w-screen'>
                <Footer />
            </div>

        </div>
    }
}

export default ShoppingCart