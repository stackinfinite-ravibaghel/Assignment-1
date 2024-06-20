import Image from "next/image";

import { RiCloseLargeFill } from "react-icons/ri";

export default function Detail() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-300 p-10 ">
      <div className="w-full flex flex-row bg-white rounded-md border-2 border-black py-10 px-5 ">
        <div className="flex justify-center w-2/5 rounded-md border-2 border-green-500 py-10 px-5 ">
          <Image
            src="/mobile/oppo.jpg"
            width={800}
            height={1500}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
        <div className="flex flex-col justify-between  w-fit h-full p-2  ">
          <Image
            src="/mobile/oppoo.jpg"
            width={120}
            height={20}
            alt="Picture of the author"
            className="rounded-md border-2 border-black p-2 my-2 "
          />
          <Image
            src="/mobile/oppooo.jpg"
            width={120}
            height={20}
            alt="Picture of the author"
            className="rounded-md border-2 border-black p-2 my-2"
          />
          <Image
            src="/mobile/oppoooo.jpg"
            width={120}
            height={20}
            alt="Picture of the author"
            className="rounded-md border-2 border-black p-2 my-2"
          />
          <Image
            src="/mobile/oppooooo.jpg"
            width={120}
            height={20}
            alt="Picture of the author"
            className="rounded-md border-2 border-black p-2 my-2"
          />
          <Image
            src="/mobile/oppoooooo.jpg"
            width={120}
            height={20}
            alt="Picture of the author"
            className="rounded-md border-2 border-black p-2 my-2"
          />
        </div>
        <div className="flex flex-col w-full p-2 relative">
          <div className="flex w-fit absolute top-2 right-2 rounded-md border-2 bg-green-500 border-black p-2 text-white">
            Add to Cart
          </div>

          <div className="font-bold text-2xl my-5">Men's Fasion T-Shirt</div>
          <div className="text-2xl my-5">₹ 32,999</div>

          {/* Size */}
          <div className="flex flex-row ">
            <span className="flex font-bold  py-5 mr-5">Select Size : </span>
            <div className="flex flex-row">
              <span className="rounded-md border-2 border-black p-2 m-2">
                S
              </span>
              <span className="rounded-md border-2 border-black p-2 m-2">
                M
              </span>
              <span className="rounded-md border-2 border-black p-2 m-2">
                L
              </span>
              <span className="rounded-md border-2 border-black p-2 m-2">
                XL
              </span>
            </div>
          </div>
          <div className="my-5">
            <span className="font-bold ">Product Specification : </span>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              voluptas reprehenderit labore qui sit aperiam esse id odit quasi
              soluta non neque facere beatae, architecto vitae, voluptatem
              fugiat officia voluptate rerum maxime dignissimos sapiente animi
              amet. Earum, non odit et officiis consequatur vitae nam sed soluta
              expedita officia harum repudiandae quia sequi in eum possimus amet
              nihil. Voluptates, tenetur doloremque!
              <br /><br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati fuga necessitatibus eos iure perferendis debitis adipisci aliquam dicta nostrum? Aut enim ipsam nulla similique beatae porro commodi officia cumque quia cupiditate accusamus laboriosam, eaque quis harum vitae possimus reprehenderit aliquid? Doloribus nisi sequi aperiam minus consectetur autem! Maxime quis amet nulla molestias dignissimos a. Quisquam incidunt numquam neque explicabo reprehenderit.
            </span>
            <br />
            <span className="font-bold text-blue-700"> See More ...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
