import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className=" bg-white w-min px-5 p-2 flex items-center rounded-full justify-center">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="bg-white outline-none text-sm flex-1"
        required
      />
      <IoSearch className="text-gray-400 m-2" />
    </div>
  );
}
