import Image from "next/image";
import Product from "./Product/page";

export default function ProductView() {
  return (
    // <div className="w-full p-3 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-3 lg:gap-4 lg:p-4 xl:grid-cols-4 xl:gap-6 xl:p-6 2xl:grid-cols-5 2xl:gap-6 2xl:p-6  ">
      <div className="w-ful">
    
      <Product />
    </div>
  );
}
