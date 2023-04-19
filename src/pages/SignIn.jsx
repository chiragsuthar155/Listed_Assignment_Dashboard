import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../auth/config.js";
import { signInWithPopup } from "firebase/auth";
import { Dashboard } from "./Dashboard.jsx";
export const SignIn = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <>
      {value ? (
        <Dashboard />
      ) : (
        <div className="flex flex-row justify-center items-center">
          <div className="text-6xl w-1/3 hidden md:flex flex-row justify-center items-center bg-black text-white h-screen ">
            <h1 className="font-['Montserrat']">Board.</h1>
          </div>
          <div className="w-2/3 mx-2 flex flex-row items-center justify-center bg-[#F5F5F5] h-screen ">
            <div className="text-4xl w-full px-2  mx-2  mt-12 md:mx-0  md:w-[440px]">
              <h2 className="mb-2 font-['Montserrat']">Sign In</h2>
              <p className="text-sm font-medium mb-6 ">
                Sign in to your account
              </p>
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-8 gap-2 md:gap-0 font-['Montserrat']">
                <div
                  onClick={handleClick}
                  className="flex flex-row items-center justify-evenly  w-56 rounded-lg  font-normal text-slate-300 cursor-pointer   bg-white"
                >
                  <FcGoogle className=" text-lg md:text-2xl" />
                  <h2 className="text-xs md:text-[14px] py-2 md:py-3 font-medium">
                    Sign in with Google
                  </h2>
                </div>
                <div className="flex flex-row items-center justify-evenly w-56 ml-0 md:ml-6 rounded-lg font-normal text-slate-300 bg-white cursor-pointer">
                  <FaApple className="text-lg md:text-2xl" />
                  <h2 className=" text-xs md:text-[14px] py-2 md:py-3 font-medium">
                    Sign in with Apple
                  </h2>
                </div>
              </div>
              <div className="bg-white w-full h-full text-lg font-medium mb-6 rounded-lg py-6 px-6">
                <form className="flex flex-col gap-5 font-['Lato']" action="">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email address</label>
                    <input
                      className="bg-gray-100 outline-none w-full rounded-lg py-2 px-2"
                      type="email"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password </label>
                    <input
                      className="bg-slate-100 outline-none px-2 w-full rounded-lg py-2"
                      type="password"
                    />
                  </div>

                  <a className="text-[#346BD4] mb-0" href="#">
                    Forgot password?
                  </a>
                  <Link to="/dashboard">
                    <button className="w-full bg-black text-white rounded-lg py-3 font-['Montserrat'] font-semibold">
                      Sign In
                    </button>
                  </Link>
                </form>
              </div>
              <p className="text-sm text-center  text-[#858585] font-normal">
                Don't have an account?{" "}
                <a className="text-[#346BD4]" href="#">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
