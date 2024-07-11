"use client";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

import Link from "next/link";

import Logo from "../Logo/page";
import SearchInput from "../SearchInput/page";

import { IoSearch } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

import { fetchCartsList } from "../../../Services/page";

export default function Header() {
  const [cartList, setCartList] = useState<any[]>([]);

  const router = useRouter();
  const cookies = new Cookies();
  const userId = cookies.get("userId");

  const [showSearchModal, setShowSearchModal] = useState(false); // State for showing the modal

  const openModal = () => {
    setShowSearchModal(true);
  };

  const closeModal = () => {
    setShowSearchModal(false);
  };

  const handleLogout = () => {
    // Clear email cookie
    cookies.remove("email");
    // Redirect to login page
    router.push("/");
  };

  const openCartSection = (e: any) => {
    e.preventDefault();
    router.push("Cart");
  };

  const openWishSection = (e: any) => {
    e.preventDefault();
    router.push("Wish");
  };

  // Fetch Category
  const fetchCartsData = async () => {
    try {
      const responseCartsItem = await fetchCartsList(userId);
      setCartList(responseCartsItem.carts);

      // console.log("Carts Item :", responseCartsItem);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchCartsData();
  }, []);

  return (
    <div className=" w-full flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-5  bg-red-300">
      <Logo />

      {/* <SearchInput /> */}
      <div className="flex ">
        <div className="flex justify-center ">
          <a
            href="#"
            className="border-2 border-white rounded-full p-3 bg-white static"
            // onClick={openSearchModal}
            onClick={() => openModal()}
          >
            <IoSearch />
            {/* Search Modal */}
            {showSearchModal && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                <div className="bg-white w-full max-w-md p-5 rounded-lg shadow-lg">
                  <div className="mb-4">
                    <label
                      htmlFor="search"
                      className="block text-gray-800 text-lg font-bold mb-4"
                    >
                      Find Product Here !!!
                    </label>
                    <input
                      type="text"
                      id="SearchProduct"
                      name="SearchProduct"
                      placeholder="Search ..."
                      className="pl-3 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-green-500 text-white border border-black rounded-lg hover:bg-white hover:text-green-500 font-bold py-2 px-4 mr-2 focus:outline-none focus:shadow-outline"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="bg-green-500 text-white border border-black rounded-lg hover:bg-white hover:text-green-500 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            )}
          </a>
        </div>
        <div className="flex justify-center ">
          <a
            href="#"
            className="border-2 border-white rounded-full p-3 mx-1 bg-white static"
            onClick={openWishSection}
          >
            <FaRegHeart />
          </a>
        </div>
        <div>
          <div className="flex justify-center ">
            <a
              href="#"
              className="border-2 border-white rounded-full p-3 bg-white static"
              onClick={openCartSection}
            >
              <TbShoppingCart />
            </a>
            <span className=" flex rounded-full bg-green-400 align-top ms-10 px-1 absolute">
              {cartList.length}
            </span>
          </div>
        </div>
        <div className="flex items-center" onClick={handleLogout}>
          <CgLogOut className="text-2xl rotate-180 text-white ml-1 sm:ml-4 cursor-pointer hover:text-green-500" />
        </div>
      </div>
    </div>
  );
}
