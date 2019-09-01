import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import FeatureListItem from '../FeatureListItem/FeatureListItem';
import slugify from 'slugify';
import './FeatureList.css';

class FeatureList extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <FeatureListItem 
                  itemHash={ itemHash }
                  name={ slugify(feature) }
                  checked={item.name === this.props.selected[feature].name}
                  onChange={e => this.props.updateFeatureCallback(feature, item)}
                  USCurrencyFormat={ this.props.USCurrencyFormat }
                  item={ item } />
              );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });

          return (
            <form className="main__form">
              <h2>Customize your laptop</h2>
              { features }
            </form>
          );
    }
}

export default FeatureList;