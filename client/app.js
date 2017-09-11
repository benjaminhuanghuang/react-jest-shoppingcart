import React from "react";

import CartItemList from './components/CartItemList.js';
import LocalizationBox from './components/LocalizationBox.js';
import TotalBox from './components/TotalBox.js';


export default class CartApp extends React.Component{
    render(){
        return (
            <div>
                <LocalizationBox />
                <h3>Your Cart ({this.props.items.length})</h3>
                <CartItemList {...this.props}/>
								<TotalBox {...this.props}/>
            </div>
        )
    }
};
