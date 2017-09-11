import { FETCH_ITEMS, DELETE_ITEM } from "../actions/types";

export default function(state = [], action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload;

    default:
      return state;
  }
}
