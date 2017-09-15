## Dependencies
  - Support ES6
    npm i -D babel-jest babel-loader babel-preset-es2015 babel-preset-react
  - Jest 
    npm i -D jest
    
## Create folders for testing
  Files in __tests__ run as tests, each module should have a corresponding file with tests.
  No need to name the test case file specially.
  I did not use config in this project

## Jest config
  Jest's configuration can be defined in the package.json file of your project, through a jest.config.js 

## Command
  jest --watch --coverage

## Test case 
  - skip
    - xdescribe
    - xit
  - just one
    - fit

## Test Utilities 
  - https://facebook.github.io/react/docs/test-utils.html
  - old 
    let TestUtils = require('react-addons-test-utils');
  - new 
    let TestUtils = require('react-dom/test-utils');


## Mock the provider
```
  import configureStore from "redux-mock-store";

  const mockStore = configureStore();
  const store = mockStore({});

  var cartItem = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <CartItem item={item} locale={{country: "USA"}}/>
    </Provider>
  );
```