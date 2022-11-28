import React from 'react'
import './ProductsCard.css'

const ProductsCard = ({ product }) => {
    return (
        <div className='products-card' >
            <br />
            <h2>{product.title}</h2>
            <img src={product.image} />
            <p className='product-price'>${product.price}</p>
            <p className='product-features'>{product.features}</p>
        </div>
    )
}

export default ProductsCard