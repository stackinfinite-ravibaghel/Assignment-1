"use client";
import React from "react";
import Link from "next/link";
import Logo from "../../Component/UI/Logo/page";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import toast from "react-hot-toast";
import Cookies from "universal-cookie";

import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";



interface FormsProps {
  handleSubmit: (formData: FormData) => Promise<{LoginResponse :any}>;
}

const Forms: React.FC<FormsProps> = ({ handleSubmit }: FormsProps) => {

  const router = useRouter();
  const cookies = new Cookies();
  // const userId = cookies.get("userId");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  
  const openModal = () => {
    setShowForgotPasswordModal(true);
  };

  const closeModal = () => {
    setShowForgotPasswordModal(false);
  };

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

  const handleSubmitForm = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const signInResponse = await handleSubmit(values); 
      cookies.set("email", signInResponse.email);
      cookies.set("userId", signInResponse._id);
      console.log("Login Successful :", signInResponse);
      setIsAuthenticated(true);
      toast.success("Login successful.");
      router.push(`Dashboard`);
    } catch (error : any) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Something went wrong.";

      toast.error(errorMessage);
      console.error("Login failed:", error);
      
    }
  };

  // Function to handle forgot password submission
  const handleForgotPassword = async (email: string) => {
    try {
      // Implement your forgot password logic here, e.g., send a reset link
      toast.success("Password reset instructions sent to your email.");
      console.log("Forgot Password successful for email:", email);
      // Close the modal after handling
      setShowForgotPasswordModal(false);
    } catch (error) {
      toast.error("Failed to send reset instructions. Please try again.");
      console.error("Forgot Password failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-2 md:py-5 lg:py-10 xl:py-15 2xl:py-20 md:px-20 lg:px-32 xl:px-52 2xl:px-72 bg-gray-100">
      <div className="flex w-full h-full flex-col sm:flex-row ">
        <div className="sm:w-3/5 flex flex-col bg-white rounded-t-2xl sm:rounded-l-2xl sm:rounded-none">
          <div className=" px-6 rounded-tl-2xl pt-8">
            <Logo />
          </div>
          <div className=" px-2 h-full flex justify-center items-center py-8">
            {/* -----------------SignIn------------------ */}
            <div className="flex items-center justify-center min-h-fit ">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmitForm}
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

                  <div>
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

                  <div className="flex w-full px-5 my-5 justify-between">
                    <label className="flex items-center text-xs font-semibold">
                      <input
                        type="checkbox"
                        name="remember"
                        className="mr-1 "
                      />
                      Remember me
                    </label>
                    <button
                      className="text-xs hover:text-blue-500 font-semibold"
                      type="button"
                      onClick={() => openModal()}
                    >
                      Forget Password
                    </button>
                  </div>

                  {/* Forgot Password Modal */}
                  {showForgotPasswordModal && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                      <div className="bg-white w-full max-w-md p-5 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">
                          Forgot Password?
                        </h2>
                        <p className="text-sm text-gray-600 mb-6">
                          Enter your email to receive instructions to reset your
                          password.
                        </p>
                        <div className="mb-4">
                          <label
                            htmlFor="forgotPasswordEmail"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Email
                          </label>
                          <Field
                            type="email"
                            id="forgotPasswordEmail"
                            name="forgotPasswordEmail"
                            placeholder="Enter your email"
                            className="pl-3 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
                          />
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="bg-green-500 text-white border border-black rounded-lg hover:bg-white hover:text-green-500 font-bold py-2 px-4 mr-2 focus:outline-none focus:shadow-outline"
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="bg-green-500 text-white border border-black rounded-lg hover:bg-white hover:text-green-500 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                            onClick={() => {
                              // handleForgotPassword(values.forgotPasswordEmail);
                              closeModal();
                            }}
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* End form content */}

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
            {/* ---------------------SignIn---------------- */}
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
              <Link
                href={"/SignUp"}
                className="bg-white text-green-500 border border-black rounded-lg hover:bg-green-500 hover:text-white font-bold py-2  px-6  focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </Link>
            </div>
            {/* Submit button */}
          </div>
          {/* Sign Up Section */}
        </div>
      </div>
    </div>
  );
};

export default Forms;
