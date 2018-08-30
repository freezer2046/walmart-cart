import React, { Component } from 'react'
import './Pickup.css'
import Tooltip from '../Itemdetails/Tooltip/Tooltip';

export class Pickup extends Component {
  render() {
    return (
      <div className = "saving">
        <u onClick={this.props.click}
          className="Tooltip">
          Pickup savings:
        </u>
        <div className="savingprice">
          ${this.props.price}
        </div>
        {this.props.open ? <Tooltip /> : null}
      </div>
    )
  }
}

export default Pickup
