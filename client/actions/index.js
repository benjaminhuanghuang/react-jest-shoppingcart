import axios from "axios";
//
import { FETCH_RATES, FETCH_ITEMS, DELETE_ITEM, FETCH_LOCALE } from "./types";

export const fetchItems = () => async dispatch => {
  const res = await axios.get("/items");
  dispatch({ type: FETCH_ITEMS, payload: res.data });
};

export const fetchRates = () => async dispatch => {
  const res = await axios.get("/rates");
  dispatch({ type: FETCH_RATES, payload: res.data });
};

export const fetchLocale = () => async dispatch => {
  const res = await axios.get("/locale");
  console.log("res", res.data);
  dispatch({ type: FETCH_LOCALE, payload: res.data });
};
