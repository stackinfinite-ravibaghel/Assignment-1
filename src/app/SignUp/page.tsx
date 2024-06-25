'use client'
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Logo from "../Component/UI/Logo/page";


export default function SignUp() {

  const [fullName, setFullName] = useState(" ");
  const [mail, setEmail] = useState(" ");
  const [pass, setPass] = useState();

  const router = useRouter();
 
  const handleSubmit = (e : any) => {
    e.preventDefault()
      
    if (mail && pass) {
      router.push(`Dashboard?fullName=${fullName}&mail=${mail}&pass=${pass}` );
    }else {
      alert('Please enter both valid value.');
    }
    
  }

  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-gray-100">

        <div className="bg-red-300 rounded-2xl shadow-2xl flex  max-w-4xl ">

          <div className=" p-5 text-black" >
            <Logo />


            <form onSubmit={handleSubmit} >
            
            <div className="py-10">
              <h2 className="text-3xl font-bold text-white mb-2">Sign Up to Account</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2" ></div>

              <div className="flex justify-center my-2">

                <a href="#" className="border-2 border-green-400 rounded-full p-3 mx-1 bg-white">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="#" className="border-2 border-green-400 rounded-full p-3 mx-1 bg-white">
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a href="#" className="border-2 border-green-400 rounded-full p-3 mx-1 bg-white">
                  <FaGoogle className="text-sm" />
                </a>

              </div>{/* Social Sign Up Section */}

              <p className="text-black m-8">or <br />Fill up personal information & start journey with us.</p>

              <div className="flex flex-col items-center">
              <div className="bg-white w-64 p-2 flex items-center mb-3 rounded-lg">
                  {/* <FaRegEnvelope  /> */}
                  <CgProfile className="text-green-400  mr-2"/>

                  <input type="text" name="name" placeholder="Full Name" className="bg-white outline-none text-sm flex-1"  onChange={(e) => setFullName(e.target.value)} required/>
                </div>

                <div className="bg-white w-64 p-2 flex items-center mb-3 rounded-lg">
                  <FaRegEnvelope className="text-green-400 mr-2" />

                  <input type="email" name="email" placeholder="Email" className="bg-white outline-none text-sm flex-1" value={mail} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div className="bg-white w-64 p-2 mb-3 flex items-center rounded-lg">
                  <MdLockOutline className="text-green-400 mr-2" />

                  <input type="password" name="password" placeholder="Password" className="bg-white outline-none text-sm flex-1 " value={pass}
                  onChange={(e : any) => setPass(e.target.value)} required/>
                </div>

                <div className="bg-white w-64 p-2 flex items-center rounded-lg">
                  <MdLockOutline className="text-green-400 mr-2" />

                  <input type="password" name="cpassword" placeholder="Confirm Password" className="bg-white outline-none text-sm flex-1" 
                  required/>
                </div>
                

                {/* Button */}
                <button className="border-2 text-white border-black bg-green-500 rounded-full px-12 py-2 my-5 inline-block font-semibold hover:bg-white hover:text-green-500 " type="submit"  >Sign Up</button>


                <p className="text-black my-3">Already have an Account? <Link href={"/"} className="text-white font-medium hover:text-green-800">Sign in</Link></p>
              </div>

            </div>
            </form>
          </div> 
          
        </div>

    </div>
  );
}
