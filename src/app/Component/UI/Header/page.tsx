"use client";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import Link from "next/link";

import { TbShoppingCart } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import Logo from "../Logo/page";
import SearchInput from "../SearchInput/page";

export default function Header() {
  const router = useRouter();
  const cookies = new Cookies();

  const handleLogout = () => {
    // Clear email cookie
    cookies.remove("email");
    // Redirect to login page
    router.push("/");
  };

  const handleCart = (e: any) => {
    e.preventDefault();
    router.push("CartList");
  };

  

  return (
    <div className=" w-full flex justify-between items-center p-5 bg-red-300">
      <Logo />
      <SearchInput />
      <div className="flex">
        <div>
          <div className="flex justify-center ">
            <a
              href="#"
              className="border-2 border-white rounded-full lg:px-5 xl:px-5 p-4 mx-2 bg-white static"
              onClick={handleCart}
            >
              <TbShoppingCart />
            </a>
            <span className=" flex rounded-full bg-green-400 align-top ms-12 px-2 absolute">
              10
            </span>
          </div>
        </div>
        <div className="flex items-center" onClick={handleLogout}>
          <CgLogOut className="text-2xl rotate-180 text-white ml-5 cursor-pointer hover:text-green-500" />
        </div>
      </div>
    </div>
  );
}

