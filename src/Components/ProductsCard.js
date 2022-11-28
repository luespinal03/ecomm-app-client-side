import React from 'react'
import './ProductsCard.css'


const ProductsCard = ({ product, itemToShoppingCart }) => {


    return (
        <div className='products-card' >
            <br />
            <h2>{product.title}</h2>
            <img src={product.image} />
            <p className='product-price'>${product.price}</p>
            <p className='product-features'>{product.features}</p>
            <button onClick={() => { itemToShoppingCart(product) }}>Add to Cart</button>
        </div>
    )
}

export default ProductsCard