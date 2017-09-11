import { FETCH_LOCALE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_LOCALE:
      return action.payload;
    default:
      return state;
  }
}
