import React from "react";
import { connect } from "react-redux";
//
import { fetchLocale, changeLocale } from "../actions";

class LocalizationBox extends React.Component {
  componentWillMount() {
    this.props.fetchLocale();
  }

	handleCountryChange({target:{value}}){
		this.props.changeLocale(value);
	}

  render() {
    return (
      <form role="Language and Currency Preferences" className="locale-form">
        <h4>Select Country</h4>
        <select name="country" id="countrySelect"
          onChange={this.handleCountryChange.bind(this)} value={this.props.locale.country}>
          <option value="USA">United States</option>
          <option value="GB">Great Britain</option>
          <option value="CAN">Canada</option>
        </select>
      </form>
    );
  }
}

function mapStateToProps({ locale }) {
  return { locale };
}
export default connect(mapStateToProps, { fetchLocale, changeLocale })(LocalizationBox);
