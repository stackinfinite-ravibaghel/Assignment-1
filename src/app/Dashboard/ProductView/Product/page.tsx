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
    <div className="w-full justify-center  content-center bg-white rounded-md border-2 border-green-500 py-2 px-5 " onClick={handleSubmit} >
      {/* Product Start */}
    <div className="flex justify-center " >
      <Image
        src="/mobile/oppo.jpg"
        width={800}
        height={1500}
        alt="Picture of the author"
        className="content-center"
      />
    </div>

    <div className="justify-center text-center mt-5">OPPO F27 Pro+ (Midnight Navy)</div>

    <div className="justify-center text-center mt-2">
    8 GB RAM / 128 GB ROM
    </div>

    <div className="justify-center text-center mt-2">₹ 27,999 /-</div>

    <div className="flex justify-center mt-5">
      <button className=" justify-center border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-black">
        Add to Cart
      </button>
    </div>
    {/* Product end */}
  </div>
  )
}