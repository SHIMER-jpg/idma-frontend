import axios from "axios";
import { GET_ORDERS } from "./orderConstants";

const { REACT_APP_BACKEND_URL } = process.env;

export const getOrders = () => {
  return function (dispatch) {
    axios
      .get(`${REACT_APP_BACKEND_URL}/orderItem/getOrders`)
      .then(({ data }) => {
        dispatch({
          type: GET_ORDERS,
          payload: data,
        });
      });
  };
};
