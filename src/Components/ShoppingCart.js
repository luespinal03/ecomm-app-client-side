import React from 'react'
import ShoppingCartCard from './ShoppingCartCard'
import OrderSummary from './OrderSummary'
import Footer from './Footer'
import './ShoppingCart.css'


const ShoppingCart = ({ shoppingCart }) => {
    if (shoppingCart.length === 0) {
        return (<div>
            <div>
                <h3 className='mt-40 ml-20'>Your Shopping Cart is Empty</h3>
            </div>

            <div className='footer-in-empty-shoppingcart'>
                <Footer />
            </div>

        </div>)
    }
    else if (shoppingCart.length > 0) {
        return <div>
            <div className='mt-20'>
                {/* <h1 className='my-10'>ShoppingCart</h1> */}
                {shoppingCart.map((product, index) => {
                    return (
                        <ShoppingCartCard key={index} product={product} />
                    )
                })}
                <OrderSummary />
            </div>

            <div className='footer-in-full-shoppingcart'>
                <Footer />
            </div>

        </div>
    }
}

export default ShoppingCart
