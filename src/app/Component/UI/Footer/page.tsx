import Link from "next/link";
import Logo from "../Logo/page"

import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" w-full flex flex-col  p-5 bg-red-300">

      <div className="w-full flex flex-col lg:flex-row lg:justify-between xl:flex-row xl:justify-between justify-center items-center p-5 ">
        
        <div ><Logo /></div>
        <div className="flex flex-row justify-center pt-5 ">
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

      <div className="flex justify-center items-center ">
        <span className=" inline-block sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Copyright @2024 .</span>
        <span><Logo/></span>
      </div>
    </div>
  );
}
