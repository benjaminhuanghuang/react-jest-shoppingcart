import { combineReducers } from "redux";
//
import ItemReducer from "./ItemReducer";
import LocalReducer from "./LocalReducer";
import RateReducer from "./RateReducer";

// maps state and reducer
const reducers = combineReducers({
  items: ItemReducer,
  local: LocalReducer,
  rate: RateReducer
});

export default reducers;
