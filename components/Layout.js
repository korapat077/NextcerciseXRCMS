import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";
import HeadderSupper from "./Headder";
const Layout =  ({ children }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = window.localStorage.getItem("auth-token");
    if (!token) {
      setToken(token);
    } else {
      setToken(token);
    }
  });

  const IsLogin = () => {
    if (token == null) {
      // console.log(token);
      return (
        <div className="content">
          <HeadderSupper />
          <div className=" flex flex-wrap">
            <Navbar />
            <div className="mt-7 ml-[4%]  w-9/12">
              {children}
            </div>
          </div>
        </div>
      );
    } else {
      // console.log(token);
      return (
        <div>
          <div className="flex h-screen justify-center items-center bg-black  font-sans ">
            <div className="text-left rounded-xl p-2 bg-gradient-to-t from-[#DA4179]  to-[#E7AA3E]">
              <div className="w-96 ">
                <form className=" bg-gradient-to-t from-[#DA4179]  to-[#E7AA3E] rounded px-5 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-[#2A4365] text-sm  mb-2"
                      htmlFor="username"
                    >
                      <div className=" flex flex-wrap">
                        <div className="pr-2 pt-1">
                          <IoLockClosedOutline />
                        </div>
                        <div>
                          Email address
                        </div>
                      </div>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-[#2A4365] text-sm mb-2"
                      htmlFor="password"
                    >
                      <div className="flex flex-wrap">
                        <div className="pr-2 pt-1">
                          <IoMailOutline />
                        </div>
                        <div>
                          Password
                        </div>
                      </div>
                    </label>
                    <input
                      className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href="/Layout"
                      className="bg-[#000] hover:bg-[#3D3C3C] text-white text-sm  py-2 px-6 rounded "
                      type="button"
                    >
                      Sign In
                    </Link>
                    <a
                      className="inline-block align-baseline  text-sm text-[#fff] hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <IsLogin />
  );
};

export default Layout;
