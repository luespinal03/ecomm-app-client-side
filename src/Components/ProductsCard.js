import React from 'react'

const ProductsCard = ({ product }) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} />
            <p>{product.price}</p>
            <p>{product.features}</p>
        </div>
    )
}

export default ProductsCard