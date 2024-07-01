// "use client";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Services } from "../Services/page";
// import axios from "axios";
// import toast from "react-hot-toast";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaGoogle,
//   FaRegEnvelope,
// } from "react-icons/fa";
// import { IoMdEye } from "react-icons/io";
// import { IoEyeOff } from "react-icons/io5";

// interface LoginResponse {
//   // token: string;
//   email: string;
//   password: string;
// }

// const Form: React.FC = () => {

//   const router = useRouter();

//   const [email, setEmail] = useState(" ");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     const userEmail = localStorage.getItem('email');
//     if(userEmail) {
//       router.push(`Dashboard`);
//     }
//   }, [router]);

//   const validateEmail = (email: string) => {
//     const re = /^\s?[A-Z0-9]+[A-Z0-9._+-]{0,}@[A-Z0-9._+-]+\.[A-Z0-9]{2,4}\s?$/i;
//     return re.test(email);
//   };

//   const validatePassword = (password: string) => {
//     return password.length >= 8 && password.length <=16;
//   }

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     let emailError = '';
//     let passwordError = '';

//     if(!validateEmail(email)) {
//       emailError = 'Invalid email address'
//     }

//     if(!validatePassword(password)) {
//       passwordError = 'Password must be 8 to 16 characters long'
//     }

//     setErrors({ email: emailError, password: passwordError});

//     if(!emailError && !passwordError) {
//       setLoading(true);

//       try {
//         // const response = await Services(email, password);
//         // localStorage.setItem('email',response.email);
//         // router.push('Dashboard');
//         // console.log('Session');

//         // New One
//         const response = await axios.post('http://http://192.168.1.10:8001/api/auth/sign-in', { email, password });

//         console.log('Login successful:', response.data);
//         router.push(`Dashboard?mail=${email}&pass=${password}`);

//       } catch (errors) {
//         console.error('Login failed:', errors);
//       setErrors('Failed to login. Please check your credentials.');
//       }

//       // router.push(`Dashboard?mail=${email}&pass=${password}`);
//     // } else {
//     //   toast.error("Please enter both valid value.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-fit ">
//       <form
//         onSubmit={handleSubmit}
//         className=" py-8 px-4 rounded-lg  w-full max-w-md"
//         >
//         <div className="flex flex-col my-5 items-center justify-center ">
//           <h2 className="text-md sm:text-2xl lg:text-3xl font-bold text-green-500 mb-2 ">
//             Sign In to Account
//           </h2>
//           <div className="border-2 w-10 border-green-500 inline-block mb-2 "></div>
//           {/* Start Social Login */}
//           <div className="flex justify-center my-2">
//             <a
//               href="#"
//               className="border-2 border-green-500 rounded-full p-3 mx-1"
//             >
//               <FaFacebookF className="text-sm" />
//             </a>
//             <a
//               href="#"
//               className="border-2 border-green-500 rounded-full p-3 mx-1"
//             >
//               <FaLinkedinIn className="text-sm" />
//             </a>
//             <a
//               href="#"
//               className="border-2 border-green-500 rounded-full p-3 mx-1"
//             >
//               <FaGoogle className="text-sm" />
//             </a>
//           </div>
//           {/* End Social Login */}

//           <div className="text-black my-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl flex flex-col items-center justify-center">
//             <span>or</span>
//             <span>use your email account</span>
//           </div>
//         </div>
//         {/* Email Start */}
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Email :
//           </label>
//           <div className="relative">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-3">

//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>

//             </span>
//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
//           </div>
//         </div>
//         {/* Email End */}

//         {/* Password Start */}
//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Password :
//           </label>
//           <div className="relative">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-3">

//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
//             </span>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               placeholder="Password"
//               className="px-10 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
//               value={password}
//               onChange={(e : any) => setPassword(e.target.value)}

//             />
//             {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
//             <span
//               className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
//               onClick={togglePasswordVisibility}
//             >
//               <svg
//                 className="h-5 w-5 text-gray-500 "
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 {showPassword ? (
//                   // <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5zm0 12c-3.87 0-7.19-2.42-8.54-6C4.81 8.42 8.13 6 12 6s7.19 2.42 8.54 6c-1.35 3.58-4.67 6-8.54 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
//                   <IoEyeOff />
//                 ) : (
//                   // <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5zm0 12c-3.87 0-7.19-2.42-8.54-6C4.81 8.42 8.13 6 12 6s7.19 2.42 8.54 6c-1.35 3.58-4.67 6-8.54 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
//                   <IoMdEye />
//                 )}
//               </svg>
//             </span>
//           </div>
//         </div>
//         {/* Password End */}
//         {/* Start Remember & Forget Password */}
//         <div className="flex flex-col w-full mt-2 mb-6  items-center sm:flex-row sm:justify-between  px-2">
//           <label className="flex items-center text-sm ">
//             <input type="checkbox" name="remember" className="mr-1 " />
//             Remember me
//           </label>
//           <a href="#" className="text-sm mt-4 sm:mt-0 text-blue-600  text-right">
//             Forget Password
//           </a>
//         </div>
//         {/* End Remember & Forget Password */}
//         {/* Submit button */}
//         <div className="flex items-center justify-center">
//           <button
//             className="bg-white text-green-500 border border-black rounded-lg hover:bg-green-500 hover:text-white font-bold py-2  px-6  focus:outline-none focus:shadow-outline"
//             type="submit"
//             >
//             Sign In
//           </button>
//         </div>
//         {/* Submit button */}
//       </form>
//     </div>
//   );
// };

// export default Form;













// components/LoginForm.tsx

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { login } from '../../Services/page';



const Forms: React.FC = () => {

  const router = useRouter();
  const cookies = new Cookies();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state is false

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .required("Password is required"),
  });


  const handleSubmit = async (values: { email: string; password: string }) => {
    const { email, password } = values;

    try {
      const loginResponse = await login(email, password);


//     // if (response.status === 200) {
       // Login successful
      toast.success("Login successful.");
      console.log("Login successful:", loginResponse);

      // Store email in cookie
      cookies.set("email", email, { path: "/" });
      setIsAuthenticated(true);

      router.push(`Dashboard`);

    // } else {
      // Handle other status codes as needed
      // console.error("Login failed with status:", response.status);
    // } 
    
    } catch (error : any) {
      // Handle network errors or API response errors
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Something went wrong.";

      toast.error(errorMessage);
      console.error("Login failed:", error);
    }
  };



  return (
    <div className="flex items-center justify-center min-h-fit ">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="py-8 px-4 rounded-lg  w-full max-w-md">
          <div className="flex flex-col my-5 items-center justify-center ">
            <h2 className="text-md sm:text-2xl lg:text-3xl font-bold text-green-500 mb-2 ">
              Sign In to Account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2 "></div>
            {/* Start Social Login */}
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-green-500 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-green-500 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-green-500 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>
            {/* End Social Login */}

            <div className="text-black my-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl flex flex-col items-center justify-center">
              <span>or</span>
              <span>use your email account</span>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
              />
            </div>

            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="px-10 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
              />

              {/* {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>} */}
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <svg
                  className="h-5 w-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {showPassword ? <IoEyeOff /> : <IoMdEye />}
                </svg>
              </span>
            </div>

            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="flex flex-col items-center justify-between ">
            <button
              type="submit"
              className="bg-green-500 text-white border border-black rounded-lg hover:bg-white hover:text-green-500 font-bold py-2  px-6  focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Forms;












