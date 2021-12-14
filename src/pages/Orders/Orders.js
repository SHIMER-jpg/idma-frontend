import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/Orders/orderActions";

import OrderItemHolder from "../../componens/OrderItemHolder/OrderItemHolder";

const Orders = () => {
  const dispatch = useDispatch();
  const orderItems = useSelector((state) => state.orderReducer.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div>
      {/* Add a header */}

      {/* Not Completed */}
      <OrderItemHolder orderItems={orderItems} />
      {/* Completed */}
      {/* <OrderItemHolder /> */}
    </div>
  );
};

export default Orders;
