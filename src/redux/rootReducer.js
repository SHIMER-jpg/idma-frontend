import { combineReducers } from "redux";
import orderReducer from "./Orders/orderReducer";

const rootReducer = combineReducers({
  orderReducer: orderReducer,
});

export default rootReducer;
