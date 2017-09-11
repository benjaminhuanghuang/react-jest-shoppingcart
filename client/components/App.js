import React from "react";
import { connect } from "react-redux";
//
import CartItemList from "./CartItemList.js";
import LocalizationBox from "./LocalizationBox.js";
import TotalBox from "./TotalBox.js";

import { fetchItems } from "../actions";

class App extends React.Component {
  componentWillMount() {
    this.props.fetchItems();
  }
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

function mapStateToProps({ items }) {
  return { items };
}
export default connect(mapStateToProps, { fetchItems })(App);
