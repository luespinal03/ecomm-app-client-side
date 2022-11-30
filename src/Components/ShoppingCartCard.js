import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ProceedToOrder from './ProceedToOrder'
import './ShoppingCartCard.css'

const ShoppingCartCard = ({ product }) => {
    return (
        <div>
            <Card className='cart-product-container'>
                <Card.Body className='cart-card-body'>
                    <Card.Img className='cart-product-img' src={product.image} />
                    <Card.Title className='product-card-title'>{product.title}</Card.Title>
                    <Card.Text className='product-price'>${product.price}</Card.Text>
                    <Card.Text className='product-features'>${product.features}</Card.Text>
                    <br />
                    <select className='toggle_option'>
                        <option>Qty 1</option>
                        <option>Qty 2</option>
                        <option>Qty 3</option>
                    </select>
                    <a>Remove</a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ShoppingCartCard