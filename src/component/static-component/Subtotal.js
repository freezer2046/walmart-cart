import React from 'react'
import './Subtotal.css'

const Subtotal = ({ price, functional }) => {
    return (
        <div>
            <div className="left">{functional}</div>
            <div className="right">${price}</div>
        </div>
    )
}

export default Subtotal
