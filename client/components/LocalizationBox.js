import React from 'react';

class LocalizationBox extends React.Component{
	handleCountryChange({ target: { value } }) {
		this.setState({ country: value });
		dispatcher.dispatch({
			type: "locale:change",
			country: value
		});
	}

	getInitialState() {
		return {
			country: this.props.local || "USA",
		}
	}

	render(){
		return (
			<form role="Language and Currency Preferences" className='locale-form'>
				<h4>Select Country</h4>
				<select name="country" id="countrySelect" onChange={this.handleCountryChange.bind(this)} value={this.state.country}>
					<option value="USA">United States</option>
					<option value="GB">Great Britain</option>
					<option value="CAN">Canada</option>
				</select>
			</form>
	)}
}

function mapStateToProps({ locale }) {
  return { locale };
}
export default connect(mapStateToProps)(LocalizationBox);
