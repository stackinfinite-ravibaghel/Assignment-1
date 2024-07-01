"use client"
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

export default function Logo (){

  const router = useRouter();
  const cookies = new Cookies();

  const handleLogout = () => {
    // Clear email cookie
    cookies.remove("email");
    // Redirect to login page
    router.push("/");
  };
  
  return(
    <div>
      <div className="text-left font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl select-none" onClick={handleLogout}>
              <span className="text-orange-600">Peter</span>
              <span>
                Bugs
              </span>
            </div>
    </div>
  )
}