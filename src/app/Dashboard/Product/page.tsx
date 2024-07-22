// import { FaHeart , FaRegHeart } from "react-icons/fa";
// const Product: React.FC = ({
//   products,
//   cartList,
//   handleAddCart,
//   handleDeleteCart,
//   handleProductDetails,
//   handleAddProductToWishList,
// }: any) => {
//   // Function to check if a product is in the cart
//   const isInCart = (productId: string): boolean => {
//     return cartList.some(
//       (item: { productId: string }) => item.productId === productId
//     );
//   };

//   const handleImageError = (e: any) => {
//     e.currentTarget.src = "/no-photo.png";
//   };

//   return (
//     <div className="flex flex-wrap justify-center gap-5 p-2">
//       {products.map((product: any) => (
//         <div
//           key={product._id}
//           className="min-w-screen bg-white   shadow-lg shadow-slate-500 py-6 px-2 cursor-pointer relative"
//         >
//           {/* Wish List option */}
//           <div
//           className=" absolute right-4 top-4 "
//           onClick={() => handleAddProductToWishList(product._id)}
//           >
//             {/* {product.wishList?"":""} */}
//             <FaRegHeart className="w-8 h-8" />
//           </div>

//           <div
//             className="flex justify-center py-4 px-2 "
//             onClick={() =>
//               handleProductDetails(
//                 product.name,
//                 product.images,
//                 product.price,
//                 product._id
//               )
//             }
//           >
//             <img
//               src={product.images[0] ? product.images[0] : "/no-photo.png"}
//               onError={handleImageError}
//               alt={product.name}
//               className="content-center w-72  h-72 "
//             />
//           </div>

//           <div
//             className="text-center font-bold mt-5 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
//             onClick={() => handleProductDetails(product._id)}
//           >
//             {product.name}
//           </div>

//           <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//             {product.description}
//           </div>

//           <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//             ₹ {product.price.toFixed(2)} /-
//           </div>

//           <div className="flex justify-center mt-5">
//             {/* {isInCart(product._id) ? (
//               <button
//                 className="border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 font-semibold hover:bg-red-400 text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
//                 onClick={() => handleDeleteCart(product._id)}
//               >
//                 Remove from Cart
//               </button>
//             ) : (
//               <button
//                 className="border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 font-semibold hover:bg-red-400 text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
//                 onClick={() => handleAddCart(product._id)}
//               >
//                 Add to Cart
//               </button>
//           )}  */}

//             {product.outOfStock ? (
//               <button className="border-2 border-red-400 rounded-full bg-red-400 p-2 md:px-4 lg:px-6 xl:px-8 font-semibold  text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" disabled>
//                 Out of Stock
//               </button>
//             ) : (
//               <button
//                 className="border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 font-semibold hover:bg-red-400 text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
//                 onClick={() => handleAddCart(product._id)}
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Product;

"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Product: React.FC = ({
  products,
  handleAddCart,
  handleProductDetails,
  handleAddProductToWishList,
}: any) => {
  const handleImageError = (e: any) => {
    e.currentTarget.src = "/no-photo.png";
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 p-2">
      {products.map((product: any) => (
        <div
          key={product._id}
          className="min-w-screen bg-white   shadow-lg shadow-slate-500 py-6 px-2 cursor-pointer relative"
        >
          {/* Wish List option */}
          <div
            className=" absolute right-4 top-4 "
            onClick={() => handleAddProductToWishList(product._id)}
          >
            <FaRegHeart className="w-8 h-8" />
          </div>

          <div
            className="flex justify-center py-4 px-2 "
            onClick={() =>
              handleProductDetails(
                product.name,
                product.images,
                product.price,
                product._id,
                product.outOfStock
              )
            }
          >
            <img
              src={product.images[0] ? product.images[0] : "/no-photo.png"}
              onError={handleImageError}
              alt={product.name}
              className="content-center w-72  h-72 "
            />
          </div>

          <div className="text-center font-bold mt-5 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {product.name}
          </div>

          <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {product.description}
          </div>

          <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            ₹ {product.price.toFixed(2)} /-
          </div>

          <div className="flex justify-center mt-5">
            {product.outOfStock ? (
              <button
                className="border-2 border-red-400 rounded-full bg-red-400 p-2 md:px-4 lg:px-6 xl:px-8 font-semibold  text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                disabled
              >
                Out of Stock
              </button>
            ) : (
              <button
                className="border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 font-semibold hover:bg-red-400 text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                onClick={() => handleAddCart(product._id)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
