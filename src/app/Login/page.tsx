"use client";
import { useRouter } from "next/navigation";
import Logo from "../Component/UI/Logo/page";
import Forms from "./Forms/page";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Hello");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-2 md:py-5 lg:py-10 xl:py-15 2xl:py-20 md:px-20 lg:px-32 xl:px-52 2xl:px-72 bg-gray-100">
      <div className="flex w-full h-full flex-col sm:flex-row ">
        <div className="sm:w-3/5 flex flex-col bg-white rounded-t-2xl sm:rounded-l-2xl sm:rounded-none">
          <div className=" px-6 rounded-tl-2xl pt-8">
            <Logo />
          </div>
          <div className=" px-2 h-full flex justify-center items-center py-8">
            {/* <Logo /> */}
            {/* Hey */}
            <Forms />
          </div>
        </div>

        <div className="sm:w-2/5 flex justify-center items-center bg-red-300 rounded-b-2xl sm:rounded-r-2xl sm:rounded-none ">
          {/* Sign Up Section */}

          <div className=" py-4 px-6 justify-center items-center flex flex-col ">
            <h2 className="text-3xl font-bold mb-2 text-white text-center ">
              Hello Friend!
            </h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="my-10 text-center">
              Fill up personal information & start journey with us.
            </p>

            {/* Submit button */}
            <div className="flex items-center justify-center">
              {/* <button
                className="bg-white text-green-500 border border-black rounded-lg hover:bg-green-500 hover:text-white font-bold py-2  px-6  focus:outline-none focus:shadow-outline"
                onClick={() => router.push("SignUp")}
              >
                Sign Up
              </button> */}
              <Link href={'/SignUp'} className="bg-white text-green-500 border border-black rounded-lg hover:bg-green-500 hover:text-white font-bold py-2  px-6  focus:outline-none focus:shadow-outline">Sign Up</Link>
            </div>
            {/* Submit button */}
          </div>
          {/* Sign Up Section */}
        </div>
      </div>
    </div>
  );
}



