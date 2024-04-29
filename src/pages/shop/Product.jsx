import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className=" w-[90%] md:w-64 flex flex-col justify-center items-center hover:scale-105 duration-300 hover:shadow-sm hover:shadow-white rounded-2xl m-2 md:m-5 pt-4 bg-gray-200 hover:transition-all ease-in cursor-pointer">
      <img src={productImage} className=" h-56 md:h-40 mb-3" />
      <div className=" text-center">
        <p>
          <b className=" text-black font-semibold mt-20 font-mono text-xl">
            {productName}
          </b>
        </p>
        <p className=" text-gray-800 text-xl my-2 font-semibold font-mono">
          ${price}
        </p>
      </div>
      <button
        className=" min-w-24 px-8 py-1 mb-4 rounded-lg bg-cyan-500 hover:bg-gray-500 text-white font-bold hover:cursor-pointer "
        onClick={() => addToCart(id)}
      >
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
