import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './OrderSummary.css'
import { useNavigate, Link, Navigate } from "react-router-dom";



const ProceedToOrder = () => {
    const navigate = useNavigate();
    return (

        <Card className='proceed-to-order-card'>
            <Card.Body>
                <Card.Title>
                    Order Summary
                </Card.Title>
                <Card.Text>
                    Subtotal
                </Card.Text>
                <Card.Text>
                    Shipping & Handling
                </Card.Text>
                <h4>
                    Estimated total
                </h4>
                <button onClick={() => { navigate('/checkout') }}>PROCEED TO CHECKOUT</button>
            </Card.Body>
        </Card>
    )
}

export default ProceedToOrder