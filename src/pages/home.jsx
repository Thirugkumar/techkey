import React from "react";
import Hero from "../assets/hero.png";
import { DATAS } from "../Datas";
import { Product } from "./shop/Product";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className=" w-11/12 md:w-full mx-auto bg-gray-100 mt-2 ">
        <div className=" flex items-center h-12 justify-center">
          <ul className=" w-[99%] lg:w-5/6 mx-auto list-none grid grid-cols-3 gap-1 md:flex justify-between font-bold text-sm md:text-lg font-serif ">
            <li className=" border-2 border-cyan-500 w-28 md:w-36 text-center rounded-lg cursor-pointer hover:bg-cyan-600 text-cyan-500 hover:text-white transition-all duration-300">
              Phones
            </li>
            <li className=" border-2 border-cyan-500 w-28 md:w-36 text-center rounded-lg cursor-pointer hover:bg-cyan-600 text-cyan-500 hover:text-white transition-all duration-300">
              Tabs
            </li>
            <li className=" border-2 border-cyan-500 w-28 md:w-36 text-center rounded-lg cursor-pointer hover:bg-cyan-600 text-cyan-500 hover:text-white transition-all duration-300">
              Speakers
            </li>
            <li className=" border-2 border-cyan-500 w-28 md:w-36 text-center rounded-lg cursor-pointer hover:bg-cyan-600 text-cyan-500 hover:text-white transition-all duration-300">
              Headphones
            </li>
            <li className=" border-2 border-cyan-500 w-28 md:w-36 text-center rounded-lg cursor-pointer hover:bg-cyan-600 text-cyan-500 hover:text-white transition-all duration-300">
              Accessories
            </li>
            <li className=" border-2 border-cyan-500 w-28 md:w-36 text-center rounded-lg cursor-pointer hover:bg-cyan-600 text-cyan-500 hover:text-white transition-all duration-300">
              LED lights
            </li>
          </ul>
        </div>
      </div>
      <div className=" lg:flex lg:justify-between w-[95%] lg:w-11/12 mx-auto items-center h-full border-4 rounded-3xl m-2 bg-gray-100">
        <div className=" lg:ml-10 px-3 mx-auto">
          <h1 className="flex mt-3 lg:mt-0 text-4xl text-center lg:text-start md:text-6xl font-bold font-sans items-center h-full text-gray-800 ">
            Technology for your Convenience
          </h1>
          <p className="font-semibold text-2xl text-center lg:text-start lg:text-4xl mt-3 text-gray-500">
            For your job, study or housework everything you need is here!
          </p>
          <p className="font-semibold text-xl lg:text-2xl mt-3 text-gray-400  text-center lg:text-start">
            Stay Tune with{" "}
            <span className=" text-cyan-500 font-bold text-lg lg:text-2xl">
              INFINITY TECHKEY
            </span>
            !
          </p>
          <Link to="/products">
            <button className=" w-full lg:w-40 text-2xl bg-red-600 font-semibold font-sans rounded-lg px-3 border-red-500 border-2 text-white py-1 mt-4 hover:text-red-600 hover:bg-gray-100">
              Shop Now
            </button>
          </Link>
        </div>
        <div>
          <img src={Hero} className="  w-[60rem]" alt="hero pic" />
        </div>
      </div>
      <div>
        <div className=" w-11/12 mx-auto">
          <h1 className="mt-10 mb-4 text-3xl underline-offset-2 underline text-center font-sans font-bold text-cyan-950">
            About Our Platform
          </h1>
          <p className="  text-xl font-semibold text-gray-700 text-center">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      <h1 className="mt-10 mb-4 text-3xl underline-offset-2 underline text-center font-sans font-bold text-cyan-950">
        PRODUCTS
      </h1>
      <div className=" h-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center lg:w-11/12 mx-auto pb-8">
        {DATAS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </section>
  );
}

export default Home;
