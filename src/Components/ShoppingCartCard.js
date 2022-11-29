import React from 'react'
import './ShoppingCartCard.css'

const ShoppingCartCard = ({ product }) => {
    return (
        <div className='item-cart-card'>
            <img src={product.image} />
            <p>{product.title}</p>
            <p className=''>${product.price}</p>
            <p className=''>${product.features}</p>
            <select>
                <option>Qty 1</option>
                <option>Qty 2</option>
                <option>Qty 3</option>
            </select>
        </div>
    )
}

export default ShoppingCartCard