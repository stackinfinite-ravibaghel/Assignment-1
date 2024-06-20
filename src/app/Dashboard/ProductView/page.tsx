import Image from "next/image";
import Product from "./Product/page";

export default function ProductView() {
  return (
    <div className="w-full place-content-center grid grid-cols-6  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-6 ">
    
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />

    </div>
  );
}
