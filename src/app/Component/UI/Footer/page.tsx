import Link from "next/link";
import Logo from "../Logo/page"

import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" w-full flex flex-col justify-between items-center p-5 bg-green-500">

      <div className="w-full flex justify-between items-center p-5 bg-green-500">
        <Logo />
        {/* <div className="text-left font-bold">
          <span className="text-white">Peter</span>Bugs
        </div> */}

        <div className="flex justify-center ">
          <a
            href="#"
            className="border-2 border-white rounded-full p-5 mx-2 bg-white"
          >
            <FaFacebookF className="text-sm " />
          </a>
          <a
            href="#"
            className="border-2 border-white rounded-full p-5 mx-2 bg-white"
          >
            <FaLinkedinIn className="text-sm " />
          </a>
          <a
            href="#"
            className="border-2 border-white rounded-full p-5 mx-2 bg-white"
          >
            <FaGoogle className="text-sm" />
          </a>
        </div>
      </div>

      <div className="inline-block flex ">
        <span className="text-2xl">Copyright @2024 </span> <Logo/>
      </div>
    </div>
  );
}
