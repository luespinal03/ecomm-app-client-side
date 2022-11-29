import React from 'react'
import './ProductsCard.css'
import { Card, Button } from 'react-bootstrap'


const ProductsCard = ({ product, itemToShoppingCart }) => {


    return (
        <div>
            <Card style={{}} className='products-card'>
                <br />
                <Card.Body className='card-body'>
                    <Card.Title className='product-card-title'>{product.title}</Card.Title>
                    <br />
                    <Card.Img variant="top" src={product.image} className='product-img' />
                    <Card.Text className='product-price'>${product.price}</Card.Text>
                    <Card.Text className='product-features'>{product.features}</Card.Text>
                    <Button className='add-to-cart-button' onClick={() => { itemToShoppingCart(product) }}>Add to Cart</Button>
                </Card.Body>
                <br />
            </Card>
        </div>

    )
}

export default ProductsCard