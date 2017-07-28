import React from 'react';
let dispatcher = require('./../dispatcher.js');

export default class LocalizationBox extends React.Component{
	handleCountryChange({ target: { value } }) {
		this.setState({ country: value });
		dispatcher.dispatch({
			type: "locale:change",
			country: value
		});
	}

	getInitialState() {
		return {
			country: this.props.country || "USA",
		}
	}
	
	render(){
		return (
			<form role="Language and Currency Preferences" className='locale-form'>
				<h4>Select Country</h4>
				<select name="country" id="countrySelect" onChange={this.handleCountryChange} value={this.state.country}>
					<option value="USA">United States</option>
					<option value="GB">Great Britain</option>
					<option value="CAN">Canada</option>
				</select>
			</form>
	)}
}
