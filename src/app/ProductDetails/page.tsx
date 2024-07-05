"use client";
import { useSearchParams } from "next/navigation";
import { FaHeart , FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  addProductToCart,
  deleteProductToCart
} from "../Services/page";

export default function ProductDetails() {


  const searchParams = useSearchParams();

  const ProductName = searchParams.get("name");
  const ProductImage = searchParams.get("image");
  const ProductPrice = searchParams.get("price");
  const getProductId = searchParams.get("productid");

  const [productId, setProductId] = useState();
  const [responseCart , setResponseCart] = useState();

  const handleCart = (passProductId : any) => {
    setProductId(passProductId);
  } 

  // Fetch Product by id or default
  useEffect(() => {
    const _fetchData = async () => {
      try {
        if (productId) {
          // Fetch products Id
          const addCartResponse = await addProductToCart(productId);
          setResponseCart(addCartResponse);
          console.log("Add Product to Cart :" ,addCartResponse)
        } else {
          // Fetch default products when selectedCategoryId is null or default
          const deleteProductResponse = await deleteProductToCart(productId);
          // Adjust fetchProducts to handle default case
          setResponseCart(deleteProductResponse);
          console.log("Delete Product to Cart :" ,deleteProductResponse)
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    _fetchData();
  }, [productId]); // Fetch data again when selectedProductId changes

  return (
    <div className="w-full min-h-screen bg-[#fcebfc] p-2">
      <div className="w-full bg-white shadow-lg shadow-gray-500 rounded-lg p-2 flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:w-1/2 h-80 md:h-96 flex gap-1">
          <div className="w-3/4 lg:w-full flex justify-center items-center ">
            <img
              src={ProductImage ? ProductImage : "/no-photo.png"}
              alt="Image"
              className="w-full h-full "
            />
          </div>
          <div
            className="w-1/4 h-full overflow-y-auto flex flex-col items-center "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex flex-col w-full items-center gap-2  px-2 py-1">
              <img
                src="/shirt/tshirt.webp"
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400 w-full"
              />

              <img
                src="/shirt/tshirtt.webp"
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400 w-full"
              />

              <img
                src="/shirt/tshirttt.webp"
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400 w-full"
              />

              <img
                src="/shirt/tshirtttt.webp"
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400 w-full"
              />

              <img
                src="/shirt/tshirttttt.webp"
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400 w-full"
              />

              <img
                src="/shirt/tshirtttttt.webp"
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400 w-full"
              />
            </div>
          </div>
        </div>
        {/* Product Details Section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-between p-1 relative">
          
          {/* Wish List option */}
          <div className=" absolute right-2 top-2  ">
            <FaRegHeart className="w-8 h-8" />
          </div>

          {/* Product Name */}
          <div className=" font-bold text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none mt-2">
            {/* Slim Fit Casual Shirt */}
            {ProductName}
          </div>

          {/* Product Specification */}
          <div className="mt-2">
            <span className="font-semibold  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none mr-1">
              Product Specification :
            </span>
            <span className="text-gray-700 leading-relaxed text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              adipisicing elit. Cum
            </span>
            {/* More Details Link */}
            <span className="text-blue-700 font-normal ml-1 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none hover:font-semibold">
              See More...
            </span>
          </div>
          {/* Product Price */}
          <div className="mt-2">
            {/* Discount Amount */}
            <span className="font-medium text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              ₹{/* ₹ 27,999 */}
              {ProductPrice}
            </span>
            {/* Actual Amount */}
            <span className="line-through mx-4 font-light text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              ₹ 32,999
            </span>
            {/* Discount Percentage */}
            <span className="font-medium text-red-400 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              15% Off
            </span>
          </div>
          {/* Select Size Options */}
          <div className=" gap-1 flex items-center mt-2">
            <span className="font-light text-nowrap text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none ">
              Size :
            </span>
            <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              S
            </span>
            <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              M
            </span>
            <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              L
            </span>
            <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              XL
            </span>
            <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              XXL
            </span>
          </div>
          {/* Select Colour Option */}
          <div className=" flex mt-2 items-center gap-2">
            <div className="font-light text-nowrap text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              Colour :
            </div>
            <div className="w-8 h-8 bg-red-500 rounded-full " />
            <div className="w-8 h-8 bg-green-500 rounded-full" />
            <div className="w-8 h-8 bg-yellow-500 rounded-full" />
            <div className="w-8 h-8 bg-blue-500 rounded-full" />
            <div className="w-8 h-8 bg-black rounded-full" />
            <div className="w-8 h-8 bg-white rounded-full" />
          </div>
          {/* Add to Cart Button */}
          <div className="flex justify-center mt-2">
            <div
              className="border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 w-full hover:bg-red-400 text-center font-semibold text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              onClick={() => handleCart(getProductId)}
            >
              {responseCart?("Remove cart"):("Add to Cart")}
              {/* Add to Cart */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
