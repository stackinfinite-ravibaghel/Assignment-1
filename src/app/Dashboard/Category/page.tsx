"use client";
import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface CategoryProps {
  handleCategoryClick: (categoryId: string) => void;

}

const Category: React.FC<CategoryProps> = ({ handleCategoryClick }) => {
  const categoryReduxData = useSelector(
    (state: RootState) => state.category.categoryList
  );
  // console.log("Redux",categoryReduxData);

  // useEffect(() => {

  //   if (categoryReduxData.length === 0) {
  //     // Fetch category from API or any other source
  //     // Example fetch call:
  //     // fetchCategory().then(categories => {
  //     //   dispatch(setCategory(categories));
  //     // });
  //   }
  // }, [categoryReduxData]);

  const scrollRef = useRef<HTMLDivElement>(null);

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
        className="absolute left-1  top-1/2 transform -translate-y-1/2 bg-gray-200 p-2  rounded-full shadow-md hover:bg-green-500 z-10 "
      >
        <FiChevronLeft size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-2   min-w-screen  mx-12 p-2    "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categoryReduxData.map((category: any) => (
          <div
            key={category.id}
            className="flex-shrink-0 text-center flex flex-col place-items-center p-2 bg-white rounded-lg "
            onClick={() => handleCategoryClick(category._id)}
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
