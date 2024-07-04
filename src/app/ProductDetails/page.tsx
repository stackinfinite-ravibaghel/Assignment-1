export default function ProductDetails() {
  return (
    <div className="w-full min-h-screen bg-[#fcebfc] p-2">
      <div className="w-full bg-slate-100 shadow-lg shadow-gray-500 rounded-lg p-2 flex flex-col sm:flex-row gap-2">
        <div className="w-full h-fit sm:w-2/4 flex gap-1">
          <div className="w-3/4  flex justify-center items-center ">
            <img src="/shirt/tshirt.webp" alt="Image" className="h-72 w-fit " />
          </div>
          <div
            className="w-1/4 h-72 overflow-y-auto flex flex-col items-center py-2 "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex flex-col gap-2">
              <img
                src="/shirt/tshirttt.webp"
                width={80}
                height={80}
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400"
              />

              <img
                src="/shirt/tshirttt.webp"
                width={80}
                height={80}
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400"
              />

              <img
                src="/shirt/tshirttt.webp"
                width={80}
                height={80}
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400"
              />

              <img
                src="/shirt/tshirttt.webp"
                width={80}
                height={80}
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400"
              />

              <img
                src="/shirt/tshirttt.webp"
                width={80}
                height={80}
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400"
              />

              <img
                src="/shirt/tshirttt.webp"
                width={80}
                height={80}
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400"
              />

              <img
                src="/shirt/tshirttt.webp"
                width={80}
                height={80}
                alt="Product Thumbnail"
                className="rounded-md border-2 border-gray-400 hover:border-red-400"
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/4">
          {/* Product Details Section */}
          <div className="w-full px-2">
            {/* Product Name */}
            <h2 className="text-2xl font-bold text-green-500 mb-4 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none ">
              Slim Fit Casual Shirt
            </h2>

            {/* Product Specification */}
            <div className="mb-2">
              <h3 className="text-xl font-bold mb-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
                Product Specification:
              </h3>
              <p className="text-gray-700 leading-relaxed sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                adipisicing elit. Cum
              </p>
            </div>

            {/* Product Size Options */}
            {/* <div className="flex flex-wrap mb-4">
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
            </div> */}

            <div className="lg:my-4">
              <span className="font-medium">₹ 27,999</span>
              <span className="line-through mx-2 font-light ">₹ 32,999</span>
              <span className="font-medium text-red-400">15% Off</span>
            </div>

            <div className="lg:mb-4 gap-1 flex items-center">
              <span className="font-light text-nowrap ">Size :</span>
              <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center">
                S
              </span>
              <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center">
                M
              </span>
              <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center">
                L
              </span>
              <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center">
                XL
              </span>
              <span className="font-medium rounded-lg border-2 bg-gray-100 w-12 h-10 flex justify-center items-center">
                XXL
              </span>
            </div>

            <div className="my-4 flex items-center gap-2">
              <div className="font-light text-nowrap">Colour :</div>
              <div className="w-8 h-8 bg-red-500 rounded-full " />
              <div className="w-8 h-8 bg-green-500 rounded-full" />
              <div className="w-8 h-8 bg-black rounded-full" />
              <div className="w-8 h-8 bg-blue-500 rounded-full" />
            </div>

            {/* Product Price */}
            {/* <div className="text-3xl font-bold text-gray-700 my-6 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none">
              ₹ 2,999
            </div> */}

            {/* More Details Link
            <a
              href="#"
              className="text-blue-700 font-bold text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none"
            >
              See More Details...
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
