import React from "react";
import ReactDOM from 'react-dom';

import CartApp from './app';

import itemStore from './stores/itemStore';
import localizationStore from './stores/localizationStore';

let items = itemStore.getItems();
let locale = localizationStore.getLocale();


// itemStore.onChange(()=>{
// 	items = itemStore.getItems();
// 	render();
// });

// localizationStore.onChange(()=>{
// 	locale = localizationStore.getLocale();
// 	render();
// });

ReactDOM.render(<CartApp items={items} locale={locale}/>, document.getElementById('app'));
