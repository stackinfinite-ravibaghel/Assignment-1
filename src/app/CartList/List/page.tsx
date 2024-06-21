import Image from "next/image";

import { RiCloseLargeFill } from "react-icons/ri";

export default function List() {
  return (
    <div className="flex flex-col mb-2 w-full lg:flex-row xl:flex-row ">
      {/* List */}
      <div className="flex w-full p-6 justify-center bg-white rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tr-none xl:rounded-bl-2xl xl:rounded-tr-none  relative">
        {/* Close Start */}
        <div className="flex sm:visible md:visible lg:invisible xl:invisible 2xl:invisible w-fit absolute top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-3 lg:top-4 lg:right-4 xl:top-5 xl:right-5 2xl:top-6 2xl:right-6 ">
          <a
            href="#"
            className="border-2 border-white rounded-full p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 bg-gray-100  "
          >
            <RiCloseLargeFill className="text-xl " />
          </a>
        </div>
        {/* Close End */}
        <Image
          src="/mobile/oppo.jpg"
          width={300}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col w-full h-full p-6 justify-center bg-red-100 rounded-br-2xl rounded-bl-2xl col-span-2 lg:rounded-bl-none lg:rounded-tr-2xl xl:rounded-bl-none xl:rounded-tr-2xl relative">
        {/* Close Start */}
        <div className="flex invisible sm:invisible md:invisible lg:visible xl:visible 2xl:visible w-fit absolute top-2 right-2 ">
          <a
            href="#"
            className="border-2 border-white rounded-full p-2 bg-gray-100  "
          >
            <RiCloseLargeFill className="text-xl " />
          </a>
        </div>
        {/* Close End */}
        <div className="font-bold text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">OPPO F27 Pro+ (Midnight Navy)</div>
        <div className=" text-gray-700 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl py-4">
          8 GB RAM / 128 GB ROM
        </div>
        <div className="">
          <span className="font-bold text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">₹ 27,999 /-</span>
          <span className="line-through text-gray-600 text-sm px-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"> ₹ 32,999</span>
          <span className="font-bold text-red-500 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl px-3">15% Off</span>
        </div>
        <div className="w-full p-4 flex justify-center lg:justify-start xl:justify-start ">
          {/* Quantity start */}

          <div className="flex flex-row  pt-4 ">
            <div className="pr-4 w-fit text-sm  sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Quantity</div>
            <div>
              <a
                href="#"
                className=" border-2 border-black rounded-full p-2cbg-white w-fit"
              >
                -
              </a>

              <a
                href="#"
                className="border-2 border-black rounded-full p-3  bg-white w-fit mx-2"
              >
                1
              </a>

              <a
                href="#"
                className="border-2 border-black rounded-full p-2  bg-white w-fit"
              >
                +
              </a>
            </div>
          </div>

          {/* Quantity End */}
        </div>
      </div>
      {/* List End */}
    </div>
  );
}
