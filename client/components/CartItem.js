import React from "react";
import { connect } from "react-redux";
//
import { deleteItem } from "../actions";
import conversionHelper from '../helper/conversionHelper';

class CartItem extends React.Component {
  constructor(props)
  {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }
  getLocalizedCurrencySymbol() {
    return conversionHelper.getSymbolForCountry(this.props.locale.country);
  }

  getLocalizedPriceString() {
    let price = conversionHelper.convertFromUSD(
      this.props.locale.country,
      this.props.item.priceUSD
    );
    let currencyString = conversionHelper.toCurrencyString(price);
    return currencyString;
  }

  removeItem(e) {
    e.preventDefault();
    this.props.deleteItem(this.props.item.id);
  }

  render() {
    return (
      <section>
        <h4>{this.props.item.name}</h4>
        <p role="price">
          Your price -{" "}
          <span className="currencySymbolDisplay">
            {this.getLocalizedCurrencySymbol()}
          </span>
          <span className="cartItemPriceDisplay">
            {this.getLocalizedPriceString()}
          </span>
        </p>
        <p role="description">{this.props.item.description}</p>
        <form onSubmit={this.removeItem}>
          <button role="remove">Remove this item from the cart</button>
        </form>
      </section>
    );
  }
}

export default connect(null, { deleteItem })(CartItem);