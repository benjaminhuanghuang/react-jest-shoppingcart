import { FETCH_LOCAL } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_LOCAL:
      return action.payload;
    default:
      return state;
  }
}
