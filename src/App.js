import React, { Component } from 'react';
import Subttotal from './component/static-component/Subtotal';
import Total from './component/total price/Total';
import { Pickup } from './component/Pickupsaving/Pickup';
import { Itemdetail } from './component/Itemdetails/Itemdetail';
import Promo from './component/Promocode/Promo.js';
import { connect } from 'react-redux';
import './App.css';



class App extends Component {

  state = {
    discount: this.props.discount,
    subtotal: 102.96,
    pickupsaving: -3.85,
    taxes: 8.92,
    openTooltip: false,
    uses: ['Subtotal', 'Est. taxes & fees (Based ln 94085)', 'Est total'],
    url: 'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    discription: 'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
    qty: 1,
    saving: 'Pick up your order in the store helps cut costs, and we pass the saving on to you.',
    buttonDisable: false,
  };

  
openTooltip = (e) => {
  e.stopPropagation();
  this.setState({openTooltip:true})
};
closeTooltip = () => {
  this.setState({openTooltip:false})
};

verifyPromoHandler = () => {

}


  componentWillReceiveProps(nextProps) {
    this.setState({
      discount: nextProps.discount
    })
  }

/***
 * @para 
 */

  render() {
    return (
      <div className="container" onClick = {this.closeTooltip}>
        <Subttotal className="subtotal" price={this.state.subtotal*this.state.discount} functional={this.state.uses[0]} />
        <Pickup className="saving" price={this.state.pickupsaving} open={this.state.openTooltip} click = {(e) => this.openTooltip(e)}/>
        <Subttotal className="tax" price={this.state.taxes} functional={this.state.uses[1]} /><hr />
        <Total id='total' price={this.state.subtotal * this.state.discount + this.state.pickupsaving + this.state.taxes} functional={this.state.uses[2]} />
        <Itemdetail url={this.state.url} discription={this.state.discription} qty={this.state.qty} price={this.state.subtotal} disprice = {this.state.subtotal+this.state.pickupsaving}  /><hr />
        <Promo buttonDisable = {this.state.buttonDisable} verifyPromo = {this.verifyPromoHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      discount: state.discount
  }
}

export default connect(mapStateToProps)(App);
