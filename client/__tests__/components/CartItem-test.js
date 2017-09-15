
jest.dontMock('../../components/CartItem.js');

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import CartItem from '../../components/CartItem.js';

describe('Cart Item', function() {
  let item = {
		id:"003",
		name:"Instant Noodles",
		description:"Tasty!",
		priceUSD:2.50
	};

  describe("The Name Display",()=>{

    it("should display the name of the item",()=>{

      // Render a list item in the document
      var cartItem = TestUtils.renderIntoDocument(
        <CartItem item={item} />
      );

      // Verify name displays correctly
      var label = TestUtils.findRenderedDOMComponentWithTag(
        cartItem , 'h4');
      expect(label.textContent).toEqual(item.name);
      })
  });

  describe("The price display",()=>{

    it ("should display the regular USD price and dollar sign if the user's country is USA",()=>{

      let conversionMock = require('../../helpers/conversionHelper.js');
      conversionMock.convertFromUSD = (x,y)=>(y * 1);
      conversionMock.getSymbolForCountry = c => "$";
			conversionMock.toCurrencyString = x => x.toFixed(2);

      var cartItem = TestUtils.renderIntoDocument(
        <CartItem item={item}/>
      );

      var price = TestUtils.findRenderedDOMComponentWithClass(
        cartItem , 'cartItemPriceDisplay');
      expect(price.textContent).toEqual(item.priceUSD.toFixed(2));

      var symbol = TestUtils.findRenderedDOMComponentWithClass(
        cartItem , 'currencySymbolDisplay');
      expect(symbol.textContent).toEqual("$");

    })
  })
})
