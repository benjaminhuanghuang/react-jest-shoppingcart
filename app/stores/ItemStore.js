var restHelper = require("../helpers/restHelper.js");
let dispatcher = require('../dispatcher.js');

var items = [];
var changeListeners = [];
export default class ItemsStore {
	constructor(){
		
		restHelper.get('items')
			.then((itemData)=>{
				items = itemData;
				this.triggerListeners();
			});

		dispatcher.register((e)=>{
			let [category,type] = e.type.split(':');
			if (category==="items"){
				if (type==="remove"){
					items = items.filter(a => a.id !== e.item.id);
					this.triggerListeners()
				}
			}
		})
	}
	
	triggerListeners(){
		changeListeners.forEach(function(listener){
			listener();
		})
	}

	onChange(listener){
		changeListeners.push(listener);
	}

	getItems(){
		return items;
	}
}

