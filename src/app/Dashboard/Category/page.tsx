"use client";
import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CategoryProps {
  categories: any[];
  handleCategoryClick: (categoryId: string) => Promise<any>;
}

const Category: React.FC<CategoryProps> = ({
  categories,
  handleCategoryClick,
}: any) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );


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

  const handleCategory = async (categoryId: string) => {
    try {
      await handleCategoryClick(categoryId);

      setSelectedCategoryId(categoryId);

    } catch (error: any) {
      console.error("Error handling category click:", error);
    }
  };


  return (
    <div className="relative bg-slate-100">
      <button
        onClick={scrollLeft}
        className="absolute left-1  top-1/2 transform -translate-y-1/2 bg-gray-200 p-2  rounded-full shadow-md hover:bg-green-500 z-10 "
      >
        <FiChevronLeft size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-2   min-w-screen  mx-12 p-2    "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category: any) => (

          <div
            key={category.id}
            onClick={() => handleCategory(category._id)}
            className={`flex-shrink-0 flex flex-col place-items-center text-center p-2 rounded-lg ${
              selectedCategoryId === category._id ? "bg-red-300" : " bg-white"
            }`}
          >
            <img
              src={category.image}
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
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-green-500 z-10 "
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default Category;
