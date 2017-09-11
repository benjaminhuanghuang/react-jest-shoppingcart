import { FETCH_RATES } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_RATES:
      return action.payload;
    default:
      return state;
  }
}
