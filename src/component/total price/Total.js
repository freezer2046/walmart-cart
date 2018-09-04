import React from 'react'
import './Total.css'

const Total = ({ price, functional }) => {
    return (
        <div>
            <div className="tsleft">
                {functional}
            </div>
            <div className="tsright">
                ${price.toFixed(2)}
            </div>
        </div>
    )
}

export default Total;
