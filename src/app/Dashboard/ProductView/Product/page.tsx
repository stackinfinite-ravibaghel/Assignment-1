// "use client";
// import { useRouter } from "next/navigation";
// import Image from "next/image";


// export default function Product () {

//   const router = useRouter();

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     router.push("Detail")
//   };

//   return (
//     <div className="w-fit bg-white rounded-md border-2 border-black py-2 px-5  " onClick={handleSubmit} >
//       {/* Product Start */}
//     <div className="flex justify-center " >
//       <Image
//         src="/mobile/oppo.jpg"
//         width={800}
//         height={100}
//         alt="Picture of the author"
//         className="content-center"
//       />
//     </div>

//     <div className="text-center mt-5 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl   ">OPPO F27 Pro+ (Midnight Navy)</div>

//     <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//     8 GB RAM / 128 GB ROM
//     </div>

//     <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">₹ 27,999 /-</div>

//     <div className="flex justify-center  mt-5">
//       <div className=" border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 font-semibold hover:bg-red-400 text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//         Add to Cart
//       </div>
//     </div>
//     {/* Product end */}
//   </div>
//   )
// }



"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchProducts } from '../../../Services/page';

const Product = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [imageError, setImageError] = useState(false); // State to track image load error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await fetchProducts();
        setProducts(productResponse); // Assuming response.data is an array of products
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (productId) => {
    router.push(`/detail/${productId}`); // Navigate to product detail page
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/no-product-found.png'; // Set default image path on error
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-fit bg-white rounded-md border-2 border-black py-2 px-5 cursor-pointer"
          onClick={() => handleSubmit(product.id)}
        >
          <div className="flex justify-center">
            {/* <Image
              src={product.image} // Assuming product has an 'image' field
              
              alt={product.name}
              className="content-center w-full h-full"
            /> */}
            <img
            src={product.image}
            alt={product.name}
            onError={handleImageError} // Handle image load error
            className={`w-full h-32  object-center bg-contain transition-transform duration-300 transform hover:scale-105 ${
              imageError ? 'bg-gray-800' : '' // Conditionally set background color
            }`}
          />
          </div>

          <div className="text-center mt-5 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">{product.name}</div>

          <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">{product.description}</div>

          <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">₹ {product.price} /-</div>

          <div className="flex justify-center mt-5">
            <div className="border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 font-semibold hover:bg-red-400 text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Add to Cart
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
