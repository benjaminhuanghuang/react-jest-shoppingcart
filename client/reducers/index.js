import { combineReducers } from "redux";
//
import ItemReducer from "./ItemReducer";
import LocaleReducer from "./LocaleReducer";
import RateReducer from "./RateReducer";

// maps state and reducer
const reducers = combineReducers({
  items: ItemReducer,
  locale: LocaleReducer,
  rate: RateReducer
});

export default reducers;
