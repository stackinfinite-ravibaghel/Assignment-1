// import Image from "next/image";

// import { RiCloseLargeFill } from "react-icons/ri";

// export default function Detail() {
//   return (
//     <div className="flex flex-col w-full min-h-screen bg-slate-100 p-8 sm:p-2 md:p-4 lg:p-6 ">
//       <div
//         className="w-full flex flex-row bg-white rounded-md border-2 border-black py-5 sm:py-2
//       md:py-4 lg:py-6 px-5 sm:px-2
//       md:px-4 lg:px-6 sm:flex-col md:flex-col  lg:flex-col "
//       >
//         <div className=" w-1/3 sm:w-full md:w-full lg:w-full xl:full flex flex-col justify-items-center relative">

//           <div className="flex justify-center w-fit rounded-md border-2 border-green-400 py-10 px-5 ">
//             <Image
//               src="/shirt/tshirt.webp"
//               width={600}
//               height={80}
//               alt="Picture of the author"
//               className="content-center "
//             />
//           </div>
//           {/* Preview Image */}
//           <div className="flex flex-row justify-between w-full h-fit p-2 ">
//             <Image
//               src="/shirt/tshirtt.webp"
//               width={120}
//               height={20}
//               alt="Picture of the author"
//               className="rounded-md border-2 border-black p-2 my-2 hover: hover:border-red-400"
//             />
//             <Image
//               src="/shirt/tshirttt.webp"
//               width={120}
//               height={20}
//               alt="Picture of the author"
//               className="rounded-md border-2 border-black p-2 my-2 hover:border-red-400"
//             />
//             <Image
//               src="/shirt/tshirtttt.webp"
//               width={120}
//               height={20}
//               alt="Picture of the author"
//               className="rounded-md border-2 border-black p-2 my-2 hover:border-red-400 sm:invisible"
//             />
//             <Image
//               src="/shirt/tshirttttt.webp"
//               width={120}
//               height={20}
//               alt="Picture of the author"
//               className="rounded-md border-2 border-black p-2 my-2 hover:border-red-400 sm:invisible md:invisible "
//             />
//             {/* <Image
//               src="/shirt/tshirtttttt.webp"
//               width={120}
//               height={20}
//               alt="Picture of the author"
//               className="rounded-md border-2 border-black p-2 my-2 hover:border-red-400"
//             /> */}
//           </div>
//         </div>
//         {/* Preview Image End */}
//         <div
//           className="flex flex-col w-2/3 sm:w-full md:w-full lg:w-full
//         px-20 py-10 sm:px-2 md:px-4 lg:px-6 relative"
//         >
//           {/* <div className="flex w-fit absolute top-2 right-2 rounded-md border-2 bg-red-300 border-green-400 p-2 text-2xl text-black sm:invisible md:invisible lg:invisible">
//             Add to Cart
//           </div> */}

//           <div className="font-bold text-4xl my-5 sm:text-sm md:text-base lg:text-lg w-full  ">Men's Fasion T-Shirt</div>
//           <div className="text-4xl my-5 sm:text-sm md:text-base lg:text-lg">₹ 2,999</div>

//           {/* Size */}
//           <div className="flex flex-row">
//             <span className="flex font-bold  py-5 mr-5 text-3xl sm:text-sm md:text-base lg:text-lg">Select Size : </span>
//             <div className="flex flex-row">
//               <span className="rounded-md border-2 border-black p-2 m-2 text-2xl sm:text-sm md:text-base lg:text-lg">
//                 S
//               </span>
//               <span className="rounded-md border-2 border-black p-2 m-2 text-2xl sm:text-sm md:text-base lg:text-lg">
//                 M
//               </span>
//               <span className="rounded-md border-2 border-black p-2 m-2 text-2xl sm:text-sm md:text-base lg:text-lg">
//                 L
//               </span>
//               <span className="rounded-md border-2 border-black p-2 m-2 text-2xl sm:text-sm md:text-base lg:text-lg">
//                 XL
//               </span>
//             </div>
//           </div>

//           <div className="pt-5 my-5 w-full">
//             <span className="font-bold text-4xl sm:text-sm md:text-base lg:text-lg">Product Specification : </span>
//             <br />
//             <br />
//             <span className="text-2xl sm:text-sm md:text-base lg:text-lg">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
//               voluptas reprehenderit labore qui sit aperiam esse id odit quasi
//               soluta non neque facere beatae, architecto vitae, voluptatem
//               fugiat officia voluptate rerum maxime dignissimos sapiente animi
//               amet. Earum, non odit et officiis consequatur vitae nam sed soluta
//               expedita officia harum repudiandae quia sequi in eum possimus amet
//               nihil. Voluptates, tenetur doloremque!
//               <br />
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Obcaecati fuga necessitatibus eos iure perferendis debitis
//               adipisci aliquam dicta nostrum? Aut enim ipsam nulla similique
//               beatae porro commodi officia cumque quia cupiditate accusamus
//               laboriosam, eaque quis harum .

//             </span>
//             <br />

//             <span className="font-bold text-blue-700 text-2xl sm:text-sm md:text-base lg:text-lg"> See More ...</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const Detail: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-1 sm:p-4 md:p-6 lg:p-8 xl:p-12 2xl:p-20">
      <div className="w-full max-w-6xl bg-white rounded-lg border-2 border-gray-300 shadow-md p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12 2xl:p-20">
        <div className="flex flex-col md:flex-row">
          {/* Product Image Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center mb-2 md:mb-0 ">
            <div className="w-full max-w-md md:max-w-full md:w-auto flex justify-center ">
              <Image
                src="/shirt/tshirt.webp"
                width={500}
                height={300}
                alt="Product Image"
                className="rounded-md border-2 border-gray-400"
              />
            </div>

            {/* hhh */}
            {/* Additional Product Images */}
            <div className="flex flex-wrap justify-center ">
              <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 p-2">
                <Image
                  src="/shirt/tshirtt.webp"
                  width={120}
                  height={80}
                  alt="Product Thumbnail"
                  className="rounded-md border-2 border-gray-400 hover:border-red-400"
                />
              </div>
              <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 p-2">
                <Image
                  src="/shirt/tshirttt.webp"
                  width={120}
                  height={80}
                  alt="Product Thumbnail"
                  className="rounded-md border-2 border-gray-400 hover:border-red-400"
                />
              </div>
              <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 p-2">
                <Image
                  src="/shirt/tshirtttt.webp"
                  width={120}
                  height={80}
                  alt="Product Thumbnail"
                  className="rounded-md border-2 border-gray-400 hover:border-red-400"
                />
              </div>
              <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 p-2">
                <Image
                  src="/shirt/tshirttttt.webp"
                  width={120}
                  height={80}
                  alt="Product Thumbnail"
                  className="rounded-md border-2 border-gray-400 hover:border-red-400"
                />
              </div>
              <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 p-2">
                <Image
                  src="/shirt/tshirtttttt.webp"
                  width={120}
                  height={80}
                  alt="Product Thumbnail"
                  className="rounded-md border-2 border-gray-400 hover:border-red-400"
                />
              </div>
            </div>
            {/* hhh */}
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 px-2">
            {/* Product Name */}
            <h2 className="text-2xl font-bold text-green-500 mb-4 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none ">
              Men's Fashion T-Shirt
            </h2>

            {/* Product Price */}
            <div className="text-3xl font-bold text-gray-700 my-6 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              ₹ 2,999
            </div>

            {/* Product Size Options */}
            <div className="flex flex-wrap mb-4">
              <span className="py-2 px-4 mr-4 mb-4 text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
                SIZE :
              </span>
              <span className="rounded-md border-2 border-gray-400 py-2 px-4 mr-4 mb-4 text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
                S
              </span>
              <span className="rounded-md border-2 border-gray-400 py-2 px-4 mr-4 mb-4 text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
                M
              </span>
              <span className="rounded-md border-2 border-gray-400 py-2 px-4 mr-4 mb-4 text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
                L
              </span>
              <span className="rounded-md border-2 border-gray-400 py-2 px-4 mr-4 mb-4 text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
                XL
              </span>
            </div>

            {/* Product Specification */}
            <div className="mb-2">
              <h3 className="text-xl font-bold mb-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
                Product Specification:
              </h3>
              <p className="text-gray-700 leading-relaxed sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                voluptas reprehenderit labore qui sit aperiam esse id odit quasi
                soluta non neque facere beatae, architecto vitae, voluptatem
                fugiat officia voluptate rerum maxime dignissimos sapiente animi
                amet. Earum, non odit et officiis consequatur vitae nam sed
                soluta expedita officia harum repudiandae quia sequi in eum
                possimus amet nihil. Voluptates, tenetur doloremque!
              </p>
            </div>

            {/* More Details Link */}
            <a
              href="#"
              className="text-blue-700 font-bold text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none"
            >
              See More Details...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
