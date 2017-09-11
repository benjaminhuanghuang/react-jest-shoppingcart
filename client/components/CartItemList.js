import React from "react";
import { connect } from "react-redux";
//
import CartItem from "./CartItem.js";

class CartItemList extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <CartItem key={"item-" + index} locale={this.props.locale} item={item}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ items, locale }) {
  return { items, locale };
}
export default connect(mapStateToProps)(CartItemList);
