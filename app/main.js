import React from "react";

import CartItemList from './components/CartItemList.js';

import itemStore from './stores/itemStore.js';
import localizationStore from './stores/localizationStore.js';

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

let items = [];
let locale = {};


itemStore.onChange(()=>{
	items = itemStore.getItems();
	render();
});

localizationStore.onChange(()=>{
	locale = localizationStore.getLocale();
	render();
});

let render = ()=>{
    if (typeof window !== 'undefined') {
      React.render(<CartApp items={items} locale={locale}/>, document.getElementById('mount'));
    }
}

