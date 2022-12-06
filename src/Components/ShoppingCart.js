import React from 'react'
import ShoppingCartCard from './ShoppingCartCard'
// import OrderSummary from './OrderSummary'
import Footer from './Footer'
// import './ShoppingCart.css'


const ShoppingCart = ({ shoppingCart, quantity, setQuantity, itemToShoppingCart }) => {
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
                {/* <h1 className='my-10'>ShoppingCart</h1> */}
                {/* {shoppingCart.map((product, index) => {
                    return ( */}
                <ShoppingCartCard shoppingCart={shoppingCart} quantity={quantity} setQuantity={setQuantity} itemToShoppingCart={itemToShoppingCart} />
                {/* )
                })} */}
                {/* <OrderSummary /> */}
            </div>

            <div className='mt-[38.9rem] w-screen'>
                <Footer />
            </div>

        </div>
    }
}

export default ShoppingCart