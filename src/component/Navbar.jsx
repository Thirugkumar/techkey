import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Logo from "../assets/INFINITY.png";

export const Navbar = () => {
  return (
    <section className=" w-full  bg-gray-900 text-lg md:text-2xl border-white border-b-2 sticky top-0 z-50">
      <div className="flex h-20 items-center justify-between w-[95%] lg:w-11/12 mx-auto">
        <div className="">
          <Link to="/">
            <img src={Logo} alt="logo" className=" w-40 h-12" />
          </Link>
        </div>
        <div className=" flex justify-end gap-3 lg:gap-10 text-white font-bold font-sans ">
          <Link
            to="/products"
            className="hover:text-cyan-500 duration-300 transition-all"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="hover:text-cyan-500 duration-300 transition-all"
          >
            MeetUS
          </Link>
          <Link
            to="/cart"
            className="hover:text-cyan-500 duration-300 transition-all"
          >
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
};
