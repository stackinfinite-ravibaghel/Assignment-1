import Image from "next/image";

import { RiCloseLargeFill } from "react-icons/ri";
import List from "./List/page";

export default function CartList() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-100 p-2 sm:p-2 md:p-4 lg:p-4 xl:p-5 2xl:p-6 ">

      <div className="rounded border-2 border-cyan-900 mb-5 p-2 sm:p-2 md:p-4 lg:p-4 xl:p-5 2xl:p-6 grid grid-rows-6  grid-cols-1">
        
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />

      </div>

      {/* Bill - Total  */}
      <div className=" w-full flex flex-col p-2 sm:p-2 md:p-4 lg:p-4 xl:p-5 2xl:p-6 bg-white rounded-2xl border-black border-2">
        
        <div className="w-full flex flex-col pb-5 justify-between">
          <div className="text-sm  pr-3 font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Address :</div>
          <div className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-2">
            C-27,H - Block, Dubarika Puri, Jaipur , Rajisthan{" "}
          </div>
        </div>
        <hr />
        <div className="w-full flex justify-between items-center mt-5">
          <div className="text-sm px-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Total : </div>
          <span className="text-sm px-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">₹27,999 /-</span>
        </div>
        <div className="w-full flex justify-center pt-5">
          <div className="w-fit flex justify-center border-2 rounded-2xl border-green-400 bg-white font-semibold hover:bg-green-400 p-2 px-6 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            Proceed to Pay
          </div>
        </div>
      </div>
      {/* Bill - Total */}
    </div>

      );
}
