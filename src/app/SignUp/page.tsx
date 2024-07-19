"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaUser,
} from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import Logo from "../Component/UI/Logo/page";
import Link from "next/link";
import Cookies from "universal-cookie";
import { signup } from "../Services/page";

// SignUp component
const SignUp: React.FC = () => {
  const router = useRouter();
  const cookies = new Cookies();

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full Name is required")
      .min(3, "Full Name must be at least 3 characters")
      .max(50, "Full Name must be at most 50 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Handle form submission
  const handleSubmit = async (values: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    const { fullName, email, password } = values;

    try {
      // Make POST request to sign-up API
      const signupResponse = await signup(fullName , email , password)

      const { _id } = signupResponse.data.user[0];
      cookies.set("loggedin", true);
      cookies.set("userId", _id);

      router.push("/Dashboard");

      toast.success("Sign Up successful.");

      // console.log("Sign Up successful:", signupResponse);
    } catch (error) {
      toast.error("Failed to sign up. Please check your details.");
      console.error("Sign Up failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-5">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="py-5 px-4 rounded-lg w-full max-w-md bg-white shadow-md">
          <div className="flex flex-col my-5 items-center justify-center">
            <div className=" px-6 rounded-tl-2xl pb-5">
              <Logo />
            </div>
            <h2 className="text-md sm:text-2xl lg:text-3xl font-bold text-green-500 mb-2">
              Sign Up to Account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
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
              <span className="text-center">or</span>
              <span className="text-center">create an account using email</span>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser />
              </span>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
              />
            </div>
            <ErrorMessage
              name="fullName"
              component="p"
              className="text-red-500 text-xs italic"
            />
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
                <FaRegEnvelope />
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

          <div className="mb-4">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
              />
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

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
              />
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
              name="confirmPassword"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="flex flex-col items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white border border-black rounded-lg hover:bg-white hover:text-green-500 font-bold py-2 px-6 focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>

            <div className="text-black my-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl flex items-center">
              <span className="text-center">Aready have an account ? </span>
              <Link href={'/'} className="text-center font-semibold text-blue-500"> Login</Link>
            </div>
          </div>
        </Form>
        
      </Formik>
    </div>
  );
};

export default SignUp;
