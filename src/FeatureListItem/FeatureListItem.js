import React, { Component } from 'react';
import './FeatureListItem.css';


class FeatureListItem extends Component {
    render() {
        return (
            <div key={this.props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.name}
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
                </label>
            </div>
        );
    }
}

export default FeatureListItem;