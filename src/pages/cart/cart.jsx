import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { DATAS } from "../../Datas";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div>
        <h1 className=" font-bold text-gray-800 text-4xl pt-3">
          Your Cart Items
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        {DATAS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className=" mb-8">
          <p className=" font-bold text-gray-800 text-4xl my-3 text-center">
            Subtotal: ${totalAmount}{" "}
          </p>
          <button
            className=" w-40 h-12 bg-gray-900 text-white rounded-lg m-2 cursor-pointer "
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
          <button
            className=" w-36 h-12 bg-gray-900 text-white rounded-lg m-2 cursor-pointer "
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <div className=" md:h-[28rem] mx-auto">
          <h1 className=" font-bold text-red-600 text-4xl py-36 text-center">
            Your Shopping Cart is Empty
          </h1>
          <div className=" w-[90%] mx-auto">
            <button
              className=" w-[100%]  md:w-full h-12 bg-cyan-800 text-white font-bold items-center justify-center rounded-lg md:mt-10 cursor-pointer "
              onClick={() => navigate("/")}
            >
              Go HOME & Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
