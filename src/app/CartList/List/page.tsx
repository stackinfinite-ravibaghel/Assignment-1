import Image from "next/image";

import { RiCloseLargeFill } from "react-icons/ri";

export default function List() {
  return (
    <div className="mb-2 grid grid-cols-3 place-items-center ">
      {/* List */}
      <div className="flex  w-full h-full p-6 justify-center  bg-white rounded-tl-2xl rounded-bl-2xl ">
        <Image
          src="/mobile/oppo.jpg"
          width={300}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col w-full h-full p-6 justify-center bg-green-500 rounded-tr-2xl rounded-br-2xl col-span-2  relative">
        <div className="flex w-fit absolute top-4 right-4 ">
          <a
            href="#"
            className="border-2 border-white rounded-full p-2  bg-white  "
          >
            <RiCloseLargeFill className="text-xl " />
          </a>
        </div>
        <div className="font-bold text-2xl">OPPO F27 Pro+ (Midnight Navy)</div>
        <div className=" text-gray-700 text-2xl py-4">
          8 GB RAM / 128 GB ROM
        </div>
        <div className=" ">
          <span className="text-2xl">₹ 27,999 /-</span>
          <span className="line-through text-gray-600 px-3"> ₹ 32,999</span>
          <span className="font-bold text-red-500 text-1xl">15% Off</span>
        </div>
        <div className="flex w-fit absolute  right-4 bottom-10 ">
          {/* Quantity start */}
          <div className="flex justify-center items-center ">
            <div className="flex flex-col  justify-center ">
              <div className="p-4 text-1xl w-fit">Quantity</div>
              <div>
                <a
                  href="#"
                  className="border-2 border-black rounded-full p-2  bg-white w-fit"
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
          </div>

          {/* Quantity End */}
        </div>
      </div>
      {/* List End */}
    </div>
  );
}
