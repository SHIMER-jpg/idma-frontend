import React from "react";
import OrderItem from "../OrderItem/OrderItem";

const OrderItemHolder = ({ orderItems }) => {
  return (
    <div className="">
      <ul className="grid grid-rows-3 grid-flow-col gap-4 h-full bg-red">
        {orderItems.map((orderItem) => {
          console.log(orderItem);
          return (
            <li className="m-5" key={orderItem._id}>
              <OrderItem {...orderItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OrderItemHolder;
