import Image from "next/image";

import { RiCloseLargeFill } from "react-icons/ri";
import List from "./List/page";

export default function CartList() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-100 p-10 ">
      <div className="rounded border-2 border-cyan-900 p-2 grid grid-rows-6 mb-5">
        
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
      <div className=" w-full flex flex-col  p-5 bg-green-500 rounded-2xl border-black border-2">
        <div className="w-full flex pb-5">
          <div className="text-2xl px-3">Address :</div>
          <div className="text-2xl">
            C-27,H - Block, Dubarika Puri, Jaipur , Rajisthan{" "}
          </div>
        </div>
        <hr />
        <div className="w-full flex justify-between items-center mt-5">
          <div className="text-2xl px-3">Total : </div>
          <span className="text-2xl px-3">₹27,999 /-</span>
        </div>
        <div className="w-full flex justify-center pt-5">
          <div className="w-fit flex justify-center border-2 rounded-2xl border-black p-4 bg-white font-bold ">
            Proceed to Pay
          </div>
        </div>
      </div>
      {/* Bill - Total */}
    </div>

      );
}
