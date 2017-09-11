import React from "react";

import CartItemList from "./CartItemList.js";
import LocalizationBox from "./LocalizationBox.js";
import TotalBox from "./TotalBox.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <LocalizationBox />
        <h3>Your Cart ({this.props.items.length})</h3>
        <CartItemList {...this.props} />
        <TotalBox {...this.props} />
      </div>
    );
  }
}
