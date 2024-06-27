"use client"
import { useRouter } from "next/navigation";
import Logo from "../Component/UI/Logo/page";
import Form from "./Form/page";


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
            <Form />
          </div>
        </div>

        <div className="sm:w-2/5 flex justify-center items-center bg-green-400 rounded-b-2xl sm:rounded-r-2xl sm:rounded-none ">
          {/* Sign in Section */}
          
          <div className=" py-4 px-6 justify-center items-center flex flex-col ">
            <h2 className="text-3xl font-bold mb-2 text-white text-center ">
              Hello Friend!
            </h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="my-10 text-center">
              Fill up personal information & start journey with us.
            </p>

            {/* Submit button */}
        {/* <div className="flex items-center justify-center">
          <button 
            className="bg-white text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white font-bold py-2  px-6  focus:outline-none focus:shadow-outline"
            type="submit"
            >
            Submit
          </button>
        </div> */}
        {/* Submit button */}

            <button
              className="bg-white text-green-500 border border-black rounded-lg hover:bg-green-500 hover:text-white font-bold py-2  px-6  focus:outline-none focus:shadow-outline"
              onClick={() => router.push("SignUp")}
            >
              Sign Up
            </button>
          </div>
          {/* Sign Up Section */}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaGoogle,
//   FaRegEnvelope,
// } from "react-icons/fa";
// import { MdLockOutline } from "react-icons/md";
// import Logo from "../Component/UI/Logo/page";

// export default function Home() {
//   const [mail, setEmail] = useState(" ");
//   const [pass, setPass] = useState();
//   const [displayText, SetDisplayText] = useState("");

//   const router = useRouter();

//   const handleInputChange = (e: any) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     // console.log(mail);
//     // SetDisplayText(mail)
//     // router.push("Dashboard " + mail)

//     if (mail && pass) {
//       router.push(`Dashboard?mail=${mail}&pass=${pass}`);
//     } else {
//       alert("Please enter both valid value.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen w-full py-2 bg-gray-100">
//       <main className="flex flex-col items-center justify-center w-full flex-1 px-5 text-center ">
//         <div className="bg-red-300 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
//           <div className="w-3/5 p-5 text-black">
//             <Logo />

//             {/* <p>Display Value: {displayText}</p> */}

//             <form onSubmit={handleSubmit}>
//               <div className="py-10">
//                 <h2 className="text-3xl font-bold text-white sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-2">
//                   Sign In to Account
//                 </h2>

//                 <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>

//                 <div className="flex justify-center my-2">
//                   <a
//                     href="#"
//                     className="border-2 border-green-400 bg-white rounded-full p-3 mx-1 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
//                   >
//                     <FaFacebookF className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" />
//                   </a>
//                   <a
//                     href="#"
//                     className="border-2 border-green-400 bg-white  rounded-full p-3 mx-1 "
//                   >
//                     <FaLinkedinIn className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl " />
//                   </a>
//                   <a
//                     href="#"
//                     className="border-2 border-green-400 bg-white  rounded-full p-3 mx-1"
//                   >
//                     <FaGoogle className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" />
//                   </a>
//                 </div>
//                 {/* Social Login Section */}

//                 <div className="text-black my-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//                   <span>or</span>
//                   <br />
//                   <span>use your email account</span>
//                 </div>

//                 <div className="flex flex-col items-center">
//                   <div className="bg-white w-fit p-2 flex items-center mb-3 rounded-lg">
//                     <FaRegEnvelope className="text-green-400 mr-2" />

//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email"
//                       className="bg-white outline-none text-sm sm:w-32 md:w-fit lg:full xl:w-fit 2xl:w-fit flex-1"
//                       value={mail}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <div className="bg-white w-64 p-2 flex items-center rounded-lg">
//                     <MdLockOutline className="text-green-400 mr-2" />

//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       className="bg-white outline-none text-sm flex-1"
//                       value={pass}
//                       onChange={(e: any) => setPass(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="flex w-64 mb-5 mt-5 justify-between">
//                     <label className="flex items-center text-xs">
//                       <input type="checkbox" name="remember" className="mr-1" />
//                       Remember me
//                     </label>
//                     <a href="#" className="text-xs">
//                       Forget Password
//                     </a>
//                   </div>

//                   {/* Button */}
//                   <button
//                     className="border-2 text-white border-black bg-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 "
//                     type="submit"
//                   >
//                     Sign In
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>{" "}
//           {/* Sign in Section */}
//           <div className="w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-36 px-12 invisible lg:visible">
//             <h2 className="text-3xl font-bold mb-2 text-white">
//               Hello, Friend!
//             </h2>
//             <div className="border-2 w-10 border-white inline-block mb-2"></div>
//             <p className="mb-10">
//               Fill up personal information & start journey with us.
//             </p>

//             <button
//               className="border-2 border-white rounded-full sm:px-8 px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-black text-nowrap"
//               onClick={() => router.push("SignUp")}
//             >
//               Sign Up
//             </button>
//           </div>{" "}
//           {/* Sign Up Section */}
//         </div>
//       </main>
//     </div>
//   );
// }
