"use client";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { fetchCategories } from '../../Services/page';

const Category: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [categories, setCategories] = useState<any[]>([]); // State to store fetched categories
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-slate-100">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10 sm:left-0 sm:top-1/2 sm:transform sm:-translate-y-1/2 xl:invisible 2xl:invisible"
      >
        <FiChevronLeft size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-2 p-1 max-w-screen px-10 lg:justify-center xl:justify-center 2xl:justify-center xl:space-x-4 2xl:space-x-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category: any) => (
          <div
            key={category.id}
            className="flex-shrink-0 text-center flex flex-col place-items-center p-2 bg-white rounded-lg"
          >
            <img
              src={category.image} // Assuming each category object has an 'image' field
              alt={category.name}
              className="w-fit h-12 object-cover rounded-md select-none"
            />

            <h2 className="mt-2 text-sm font-medium select-none sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              {category.name}
            </h2>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10 xl:invisible 2xl:invisible"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default Category;


// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import axios from "axios";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const Category: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [products, setProducts] = useState<any[]>([]); // State to store fetched products

//   // Fetch products from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://192.168.1.8:8001/api/categories");
//         setProducts(response.data); // Assuming response.data is an array of products
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative bg-slate-100">
//       <button
//         onClick={scrollLeft}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10 sm:left-0 sm:top-1/2 sm:transform sm:-translate-y-1/2 xl:invisible 2xl:invisible"
//       >
//         <FiChevronLeft size={24} />
//       </button>

//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto space-x-2 p-1 max-w-screen px-10 lg:justify-center xl:justify-center 2xl:justify-center xl:space-x-4 2xl:space-x-6"
//         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="flex-shrink-0 text-center flex flex-col place-items-center p-2 bg-white rounded-lg"
//           >
//             {/* Assuming product.images is an array of image URLs */}
//             <img
//               src={product.images[0]} // Displaying the first image, adjust as needed
//               alt={product.name}
//               className="w-fit h-12 object-cover rounded-md select-none"
//             />

//             <h2 className="mt-2 text-sm font-medium select-none sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
//               {product.name}
//             </h2>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={scrollRight}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10 xl:invisible 2xl:invisible"
//       >
//         <FiChevronRight size={24} />
//       </button>
//     </div>
//   );
// };

// export default Category;



// "use client";
// import React, { useRef } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const categories = [
//   {name: 'Grocery', image: '/category-image/grocery.webp' },
//   {name: 'Mobile', image: '/category-image/mobile.webp' },
//   {name: 'Fasion', image: '/category-image/fasion.webp' },
//   {name: 'Travel', image: '/category-image/travel.webp' },
//   {name: 'Beauty', image: '/category-image/beauty.webp' },
//   {name: 'Toy', image: '/category-image/toy.webp' },
//   {name: 'Book', image: '/category-image/book.webp' },
//   {name: 'Sport', image: '/category-image/sport.webp' },
//   {name: 'Gym', image: '/category-image/gym.webp' },
//   {name: 'Electronic', image: '/category-image/electronic.webp' },
//   {name: 'Furniture', image: '/category-image/furniture.webp' },
//   {name: 'Appliance', image: '/category-image/appliance.webp' },
//   {name: 'Health Care', image: '/category-image/health-care.webp' }
// ];

// const Category:React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (scrollRef.current){
//       scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({left:200, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative bg-slate-100" >
//       <button
//         onClick={scrollLeft}
//         className="absolute left-0 top-1/2  transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10 sm:left-0 sm:top-1/2 sm:transform sm:-translate-y-1/2 xl:invisible 2xl:invisible"
//       >
//         <FiChevronLeft size={24}  />
//       </button>

//       <div ref={scrollRef} className="flex overflow-x-auto space-x-2 p-1 max-w-screen px-10 lg:justify-center xl:justify-center 2xl:justify-center xl:space-x-4 2xl:space-x-6 "
//       style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>

//         {categories.map((category, index) => (

//           <div key={index} className="  flex-shrink-0 text-center flex flex-col place-items-center p-2 bg-white rounded-lg ">

//             <img src={category.image} alt={category.name} className="w-fit h-12 object-cover rounded-md select-none " />

//             <h2 className="mt-2 text-sm font-medium select-none sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">{category.name}</h2>
//           </div>

//         ))}
//       </div>

//           <button
//             onClick={scrollRight}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10 xl:invisible 2xl:invisible"
//           >
//             <FiChevronRight size={24} />
//           </button>
          
//     </div>
//   )

// };

// export default Category;



// import Image from "next/image";
// import CategoryImage from "./CategoryImage/page";

// export default function Category() {
//   return (
//     <div className=" w-full bg-gray-200 text-black justify-center grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6
//     xl:grid-cols-7 2xl:grid-cols-8 place-items-center gap-2 p-2 ">
//       <CategoryImage />
//       <CategoryImage />
//       <CategoryImage />
//       <CategoryImage />
//       <CategoryImage />
//       <CategoryImage />
//       <CategoryImage />
//       <CategoryImage />
//     </div>
//   );
// }
