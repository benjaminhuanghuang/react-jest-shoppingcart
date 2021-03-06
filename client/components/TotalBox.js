import React, {Component} from "react";
import { connect } from "react-redux";
import _ from "lodash";
//
import conversionHelper from '../helpers/conversionHelper';

class TotalBox extends Component {
  calculateTotalItemPrices() {
    return _.sumBy(this.props.items, i => i.priceUSD);
  }

  getTotalString() {
    return conversionHelper.toLocaleCurrencyString(
      this.calculateTotalItemPrices(),
      this.props.locale.country
    );
  }

  render() {
    return (
      <section role="cart total" className="total">
        <h3>Your Total</h3>
        <h2>{this.getTotalString()}</h2>
        <button className="checkout">Check Out Now</button>
      </section>
    );
  }
}


function mapStateToProps({ items, locale }) {
  return { items, locale };
}
export default connect(mapStateToProps)(TotalBox);
