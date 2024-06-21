import Image from "next/image";

import { RiCloseLargeFill } from "react-icons/ri";

export default function Detail() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-100 p-8 sm:p-2 md:p-4 lg:p-6 ">
      <div
        className="w-full flex flex-row bg-white rounded-md border-2 border-black py-5 sm:py-2
      md:py-4 lg:py-6 px-5 sm:px-2
      md:px-4 lg:px-6 sm:flex-col md:flex-col  lg:flex-col "
      >
        <div className=" w-1/3 sm:w-full md:w-full lg:w-full xl:full flex flex-col justify-items-center relative">
        
          <div className="flex justify-center w-fit rounded-md border-2 border-green-400 py-10 px-5 ">
            <Image
              src="/shirt/tshirt.webp"
              width={600}
              height={80}
              alt="Picture of the author"
              className="content-center "
            />
          </div>
          {/* Preview Image */}
          <div className="flex flex-row justify-between w-full h-fit p-2 ">
            <Image
              src="/shirt/tshirtt.webp"
              width={120}
              height={20}
              alt="Picture of the author"
              className="rounded-md border-2 border-black p-2 my-2 hover: hover:border-red-400"
            />
            <Image
              src="/shirt/tshirttt.webp"
              width={120}
              height={20}
              alt="Picture of the author"
              className="rounded-md border-2 border-black p-2 my-2 hover:border-red-400"
            />
            <Image
              src="/shirt/tshirtttt.webp"
              width={120}
              height={20}
              alt="Picture of the author"
              className="rounded-md border-2 border-black p-2 my-2 hover:border-red-400 sm:invisible"
            />
            <Image
              src="/shirt/tshirttttt.webp"
              width={120}
              height={20}
              alt="Picture of the author"
              className="rounded-md border-2 border-black p-2 my-2 hover:border-red-400 sm:invisible md:invisible "
            />
            {/* <Image
              src="/shirt/tshirtttttt.webp"
              width={120}
              height={20}
              alt="Picture of the author"
              className="rounded-md border-2 border-black p-2 my-2 hover:border-red-400"
            /> */}
          </div>
        </div>
        {/* Preview Image End */}
        <div
          className="flex flex-col w-2/3 sm:w-full md:w-full lg:w-full 
        px-20 py-10 sm:px-2 md:px-4 lg:px-6 relative"
        >
          {/* <div className="flex w-fit absolute top-2 right-2 rounded-md border-2 bg-red-300 border-green-400 p-2 text-2xl text-black sm:invisible md:invisible lg:invisible">
            Add to Cart
          </div> */}

          <div className="font-bold text-4xl my-5 sm:text-sm md:text-base lg:text-lg w-full  ">Men's Fasion T-Shirt</div>
          <div className="text-4xl my-5 sm:text-sm md:text-base lg:text-lg">₹ 2,999</div>

          {/* Size */}
          <div className="flex flex-row">
            <span className="flex font-bold  py-5 mr-5 text-3xl sm:text-sm md:text-base lg:text-lg">Select Size : </span>
            <div className="flex flex-row">
              <span className="rounded-md border-2 border-black p-2 m-2 text-2xl sm:text-sm md:text-base lg:text-lg">
                S
              </span>
              <span className="rounded-md border-2 border-black p-2 m-2 text-2xl sm:text-sm md:text-base lg:text-lg">
                M
              </span>
              <span className="rounded-md border-2 border-black p-2 m-2 text-2xl sm:text-sm md:text-base lg:text-lg">
                L
              </span>
              <span className="rounded-md border-2 border-black p-2 m-2 text-2xl sm:text-sm md:text-base lg:text-lg">
                XL
              </span>
            </div>
          </div>

          <div className="pt-5 my-5 w-full">
            <span className="font-bold text-4xl sm:text-sm md:text-base lg:text-lg">Product Specification : </span>
            <br />
            <br />
            <span className="text-2xl sm:text-sm md:text-base lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              voluptas reprehenderit labore qui sit aperiam esse id odit quasi
              soluta non neque facere beatae, architecto vitae, voluptatem
              fugiat officia voluptate rerum maxime dignissimos sapiente animi
              amet. Earum, non odit et officiis consequatur vitae nam sed soluta
              expedita officia harum repudiandae quia sequi in eum possimus amet
              nihil. Voluptates, tenetur doloremque!
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati fuga necessitatibus eos iure perferendis debitis
              adipisci aliquam dicta nostrum? Aut enim ipsam nulla similique
              beatae porro commodi officia cumque quia cupiditate accusamus
              laboriosam, eaque quis harum .

            </span>
            <br />

            <span className="font-bold text-blue-700 text-2xl sm:text-sm md:text-base lg:text-lg"> See More ...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
