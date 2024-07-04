import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
export default function cart() {
  return (
    <div className="min-w-min min-h-screen bg-[#fcebfc] p-2 flex flex-col sm:flex-row gap-2">
      
      <div className="w-full sm:w-4/6 h-fit flex flex-col gap-2 ">


        {/* Product View */}{/* Apply Map Here */}
        <div className="w-full shadow-lg shadow-gray-500 rounded-lg flex flex-col gap-2 bg-white p-2">
          {/* Start Product Image & Description */}
          <div className="flex gap-2">
            <div>
              <img src="/shirt/tshirt.webp" alt="Image" className="w-80 " />
            </div>
            <div className=" flex flex-col justify-between lg:justify-start ">
              <div className=" font-bold ">Slim Fit Casual Shirt</div>
              <div className="font-light lg:my-4 ">
                Bottom-Down Collar & Placket Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="lg:mb-4 ">
                <span className="font-light pr-1">Size :</span>
                <span className="font-medium">XL</span>
                <span className="font-light mx-1">/</span>
                <span className="font-light mr-1">Colour :</span>
                <span className="font-medium">Marron</span>
              </div>
              <div>
                <span className="font-medium">₹ 27,999</span>
                <span className="line-through mx-2 font-light ">₹ 32,999</span>
                <span className="font-medium text-red-400">15% Off</span>
              </div>
            </div>
          </div>
          {/* End Product Image & Description */}

          {/* Line Start */}
          <div className=" w-full h-0.5 mt-4 inline-block bg-gray-200" />
          {/* line End */}

          {/* Quantity, Edit & Delete Start */}
          <div className=" p-4  flex justify-between">
            <div className="flex">
              <span className=" rounded-lg border-2 bg-gray-100 w-8 h-8 flex justify-center items-center ">
                -
              </span>
              <span className=" font-semibold w-8 h-8 flex justify-center items-center ">
                1
              </span>
              <span className="rounded-lg border-2 bg-gray-100 w-8 h-8 flex justify-center items-center ">
                +
              </span>
            </div>
            <div className="flex">
              <span className="rounded-lg border-2 bg-gray-100 w-8 h-8 flex justify-center items-center ">
                <FaRegEdit />
              </span>
              <span className="px-2"></span>
              <span className="rounded-lg border-2 bg-gray-100 w-8 h-8 flex justify-center items-center ">
                <RiDeleteBin6Line />
              </span>
            </div>
          </div>
          {/* Quantity, Edit & Delete End */}
        </div>
        {/* Product View End */}

        
      </div>

      {/* Bill Start */}
      <div className="w-full sm:w-2/6 h-fit bg-white shadow-lg shadow-gray-500 rounded-lg flex flex-col p-2 gap-2">
        <div className="font-bold">Order Summary</div>
        <div className="flex justify-between">
          <div>Sub Total</div>
          <div>₹ 15000</div>
        </div>
        <div className="flex justify-between">
          <div>Discount</div>
          <div>₹ 100</div>
        </div>
        <div className="flex justify-between">
          <div>Shipping</div>
          <div>₹ 49</div>
        </div>

        {/* Line Start */}
        <div className=" w-full h-0.5 inline-block bg-gray-100" />
        {/* line End */}
        
        <div className="flex justify-between">
          <div className="font-semibold">Total</div>
          <div className="font-semibold">₹ 1449</div>
        </div>

        <div className=" bg-green-500 flex justify-center items-center rounded-2xl p-1 mx-4 my-2 font-semibold">
          Proceed to Pay
        </div>

        {/* Line Start */}
        <div className=" w-full h-0.5 inline-block bg-gray-200" />
        {/* line End */}

        <div className="font-normal">
          Delivery by
          <span className="ml-1 font-medium">00 June, 0000</span>
        </div>
        
      </div>
      {/* Bill End */}
    </div>
  );
}
