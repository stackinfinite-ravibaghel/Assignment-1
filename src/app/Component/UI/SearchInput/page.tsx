import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className=" bg-white lg:w-min lg:px-5 xl:px-5 p-2 flex items-center rounded-full justify-center">
      
      
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="bg-white w-0 lg:w-fit xl:w-min  outline-none text-sm flex-1"
        />
        
      <IoSearch className="text-gray-600 m-2" />
    </div>
  );
}
