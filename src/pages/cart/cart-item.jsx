import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className=" w-[95%] lg:w-[700px] lg:h-[250px] md:flex items-center rounded-3xl m-4 p-3 shadow-xl border-2">
      <img src={productImage} className=" w-52 mx-auto" />
      <div className=" w-full text-3xl md:pl-5 text-center md:text-start">
        <p>
          <b>{productName}</b>
        </p>
        <p className=" font-semibold text-2xl"> Price: ${price}</p>
        <div className=" font-bold text-lg">
          <input
            className=" w-10 text-center font-bold border-2 rounded-md border-gray-900 h-10 shadow-xl"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            onClick={() => addToCart(id)}
            className=" w-60 md:w-40 h-10 bg-gray-900 text-white rounded-lg m-2 cursor-pointer "
          >
            Add more
          </button>
          <button
            onClick={() => removeFromCart(id)}
            className=" w-full md:w-40 h-10 bg-gray-900 text-white rounded-lg md:m-2 cursor-pointer "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
