import { GET_ORDERS } from "./orderConstants";

const initialState = {
  orders: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
}
