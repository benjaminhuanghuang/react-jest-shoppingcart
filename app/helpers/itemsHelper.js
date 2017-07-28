let dispatcher = require('./../dispatcher.js');
let restHelper = require("./../helpers/restHelper.js");

export default itemsHelper = {
	removeItem(item){
		dispatcher.dispatch({
			type:"items:remove",
			item
		});
		restHelper.del(`items/${item.id}`);
	}
}