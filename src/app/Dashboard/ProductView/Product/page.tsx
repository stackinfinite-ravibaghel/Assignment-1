"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function Product () {

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("Detail")
  };

  return (
    <div className="w-fit bg-white rounded-md border-2 border-black py-2 px-5  " onClick={handleSubmit} >
      {/* Product Start */}
    <div className="flex justify-center " >
      <Image
        src="/mobile/oppo.jpg"
        width={800}
        height={100}
        alt="Picture of the author"
        className="content-center"
      />
    </div>

    <div className="text-center mt-5 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl   ">OPPO F27 Pro+ (Midnight Navy)</div>

    <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
    8 GB RAM / 128 GB ROM
    </div>

    <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">₹ 27,999 /-</div>

    <div className="flex justify-center  mt-5">
      <div className=" border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 font-semibold hover:bg-red-400 text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        Add to Cart
      </div>
    </div>
    {/* Product end */}
  </div>
  )
}