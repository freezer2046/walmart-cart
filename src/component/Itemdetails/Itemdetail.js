import React, { Component } from 'react'
import './Itemdetail.css'

export class Itemdetail extends Component {
    state = {
        openDetail: false,
    }


    showItemDetail = () => {
        return (
            <div className='item-detail'>
                <div className='img' >
                    <img src={this.props.url} alt="chair.jpeg" />
                </div>
                <div className="details">
                    <p className="text">
                        {this.props.discription}
                    </p>
                    <div id="price">
                        <span className="item-price-original">
                            ${this.props.price}
                        </span>
                        <br />
                        <span className='item-price-discount'>
                            ${this.props.disprice}
                        </span>
                    </div>
                    <div className="qty">
                        <p>Qty:{this.props.qty}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="cursor" onClick={() => this.setState({ openDetail: !this.state.openDetail })}>
                <p className="details-buttton" >
                    <u>
                        {this.state.openDetail === false ? 'See item Details' : 'Hide item Details'}
                    </u>
                    &nbsp;<span id="plus">
                        {this.state.openDetail === false ? '+' : '-'}
                    </span>
                </p>
                {this.state.openDetail ? this.showItemDetail() : null}
            </div>
        )
    }
}

export default Itemdetail
