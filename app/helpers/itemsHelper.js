let dispatcher = require('./../dispatcher.js');
let restHelper = require("./../helpers/restHelper.js");

export default {
	removeItem(item){
		dispatcher.dispatch({
			type:"items:remove",
			item
		});
		restHelper.del(`items/${item.id}`);
	}
}