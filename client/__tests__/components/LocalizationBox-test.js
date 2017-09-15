"use strict";
jest.dontMock('../../components/LocalizationBox.js');

import React from 'react';
import TestUtils from 'react-dom/test-utils';

xdescribe("the localization box",()=>{
	it("should display the country associated with the current value",()=>{

		let LocalizationBox = require('../../../app/components/LocalizationBox.js');

		let localeInfo = {
			country:"GB"
		};

		let localizationBox = TestUtils.renderIntoDocument(
			<LocalizationBox country={localeInfo.country} />
		);

		// todo - finalize localization helper
		let select = TestUtils.findRenderedDOMComponentWithTag(localizationBox , 'select');

		expect(select.options[select.selectedIndex].textContent).toEqual("Great Britain");

		TestUtils.Simulate.change(select, { target: { value: "USA" } });

		expect(select.options[select.selectedIndex].textContent).toEqual("United States");

	});

	it("should dispatch an event when the box is changed.",()=>{

		let dispatcher = require('../../../app/dispatcher.js');

		dispatcher.dispatch = jest.genMockFn();

		let LocalizationBox = require('../../components/LocalizationBox.js');

		let localeInfo = {
			country:"USA"
		};

		let localizationBox = TestUtils.renderIntoDocument(
			<LocalizationBox country={localeInfo.country} />
		);

		let select = TestUtils.findRenderedDOMComponentWithTag(localizationBox , 'select');

		TestUtils.Simulate.change(select, { target: { value: "GB" } });

		expect(dispatcher.dispatch).toBeCalledWith({
			type:"locale:change",
			country:"GB"
		});
	});
});
