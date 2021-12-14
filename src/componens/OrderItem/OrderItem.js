import React from "react";

const OrderItem = ({
  productName,
  size,
  color,
  number,
  clientName,
  producerId,
  departureId,
  internalStatus,
  storeStatus,
  nextAction,
  product,
  note,
  payment,
}) => {
  return (
    <div>
      <div className="min-w-max relative bg-white rounded-xl flex">
        {/* THUMBNAIL */}
        <div className="h-auto w-36 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img className="object-cover " src={product.images[0]} />
        </div>

        <div className="min-w-max relative border-r w-1/4 border-b border-l shadow-lg border-pink-500 lg:border-l-0 lg:border-t lg:border-pink-500 rounded-b lg:rounded-b-none lg:rounded-r ">
          {/* TITLE */}
          <div className="relative flex justify-around">
            <p className="text-black-900 font-bold text-xl mb-2 pt-2">
              {productName}
            </p>
            <p className="relative float-right rounded-bl pb-2 pr-4 pl-4 border-l border-b border-pink-500 text-xl font-bold bg-white text-pink-500 hover:text-white hover:bg-pink-500  ">
              {number}
            </p>
          </div>
          <div className="pl-10 pr-10">
            <div className="flex justify-around pb-2">
              <div>
                <p className="text-gray-800 font-bold text-l">Clienta</p>
                <p className="text-gray-500 text-l">{clientName}</p>
              </div>
            </div>
            {/* PREP INFO */}
            {/* <div className="flex justify-evenly">
            <div>
              <p className="text-gray-800 text-l">Talle </p>
              <p className="text-gray-500 font-medium">{size}</p>
            </div>
            <div>
              <p className="text-gray-800 text-l">Color </p>
              <p className="text-gray-500 font-medium">{color}</p>
            </div>
          </div> */}
            <div className="flex justify-evenly">
              <div>
                <p className="text-gray-800 font-bold text-l">Productor </p>
                <p className="text-gray-500 font-medium">
                  {producerId ? producerId : "No asignado"}
                </p>
              </div>
              <div>
                <p className="text-gray-800 font-bold text-l">Partida </p>
                <p className="text-gray-500 font-medium">
                  {departureId ? departureId : "No asignada"}
                </p>
              </div>
            </div>

            {/* STORE INFO */}
            {/* <div className="w-auto flex flex-row space-evenly">
              <p className="text-gray-500 font-medium">{payment}</p>
              <p className="text-gray-500 font-medium">{storeStatus}</p>
              <p className="text-gray-500 font-medium">{nextAction}</p>
            </div> */}
            <p className="text-gray-500 font-medium">{internalStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

/**
 * 
clientId: 79178793
clientName: "Alejandra Dubovik"
internalStatus: "Pending"
nextAction: "waiting_packing"
note: "Un vestido brigitte rojo , médium "
number: 300
orderId: 503933194
payment: "paid"
product: {images: Array(9)}
productId: 102487220
productName: "Vestido Brigitte (rojo, medium)"
storeStatus: "open"

 */
