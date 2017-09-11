import { FETCH_LOCALE } from "../actions/types";

export default function(state = { country: "USA" }, action) {
  switch (action.type) {
    case FETCH_LOCALE:
      return action.payload;
    default:
      return state;
  }
}
