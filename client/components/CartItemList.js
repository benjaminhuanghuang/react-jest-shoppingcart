import React from "react";

import CartItem from "./CartItem.js";

class CartItemList extends React.Component {
  return() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <CartItem key={"item-" + index} local={this.props.local} item={item}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ items, local }) {
  return { items, locae };
}
export default connect(mapStateToProps)(TotalBox);
