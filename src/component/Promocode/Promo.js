import React, { Component } from 'react';
import './Promo.css';
import { connect } from 'react-redux';

import * as actionCreators from '../../Store/Action/Action';



export class Promo extends Component {
    state = {
        promocode: this.props.promo,
        disc: this.props.discount,
        promostatus: false,
        value: ''
    }

    clicked = () => {
        this.props.onApply(this.state.promocode);
        console.log(this.state.promocode);
        console.log(this.props.discount);
    }
    showPromo = () => {
        return (
            <div className="promo">
                <div className="promoleft">
                    <p className="discription">Promo code</p>
                    <input
                        type="text"
                        value={this.state.promocode}
                        onChange={(event) => {this.setState({promocode: event.target.value})}}
                        placeholder="Enter Promo Code">
                    </input>
                </div>
                <div className="promoright-button">
                    <button
                        className="promo-button"
                        disabled={this.props.buttonDisable}
                        onClick={this.clicked}
                        >Apply
                        {/* without value it will crash the browser              */}
                    </button>
                </div>

            </div>
        )


    }

    render() {
        return (
            <div>
                <p className='P-button'
                    onClick={() => this.setState(
                        {
                            promostatus: !this.state.promostatus
                        })}>
                    <u>
                        {this.state.openPromo === false ? 'Apply promo code' : 'Hide promo code'}
                    </u>
                    <span id="plus">
                    &nbsp;{this.state.promostatus === false ? '+' : '-'}
                    </span>
                </p>
                {this.state.promostatus ? this.showPromo() : null}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        promo: state.promocode,
        discount: state.discount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onApply: (promocode) => dispatch(actionCreators.applycode(promocode))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Promo)
