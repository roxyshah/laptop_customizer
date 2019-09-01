import React, { Component } from 'react';
import './Cart.css'
import CartItem from '../CartItem/CartItem';

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
        
            return(
                <CartItem 
                    featureHash={ featureHash }
                    feature = { feature }
                    selectedOption={ selectedOption }
                    USCurrencyFormat={ this.props.USCurrencyFormat } />
            );
        });
      
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            { summary }
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        );
    }
}

export default Cart;