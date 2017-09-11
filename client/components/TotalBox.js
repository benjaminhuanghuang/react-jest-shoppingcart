import React, {Component} from "react";
import _ from "lodash";

export default class TotalBox extends Component {
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


function mapStateToProps({ items }) {
  return { items };
}
export default connect(mapStateToProps)(TotalBox);
