import React from "react";
import { DATAS } from "../../Datas";
import { Product } from "./Product";

export const Shop = () => {
  return (
    <div className=" bg-gray-100">
      <div className=" text-center text-4xl">
        <p className=" pt-4 font-serif text-gray-500">Welcome back ..!</p>
        <h1 className=" font-bold text-gray-900 pb-10">
          - - - INFINITY TECHKEY - - -
        </h1>
      </div>

      <div className=" h-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center lg:w-11/12 mx-auto pb-8">
        {DATAS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
