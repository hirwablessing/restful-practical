import React from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";

export default function Login() {
  return (
    <div>
      <div className="w-full overflow-hidden rounded-3xl bg-white">
        <div className="w-full md:flex">
          <div className="hidden w-1/2 items-center justify-center  h-screen bg-lightblue md:flex md:flex-col md:gap-[33px]">
            <img src="/img/logo.png" alt="rra logo" width={300} />
            <p className="text-primary font-bold tex-base">
              Welcome to <br />
              vehicle management system
            </p>
          </div>
          <div className="w-full py-10 px-5  md:flex md:justify-center md:items-center  md:px-10">
            <form className="md:ml-[50px]">
              <div className="mb-10 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-900">Login</h1>
                <p className="flex gap-1 text-base">
                  <span className="text-[#ADB5BD]">
                    {" "}
                    Already have an account?
                  </span>{" "}
                  <Link className="text-primary" to="/signup">
                    Sign up
                  </Link>
                </p>
              </div>

              <div className="-mx-3 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <input
                    name="email"
                    id="email"
                    placeholder="john@gmail.com"
                    className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    required
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>
              </div>

              <spam
                type="submit"
                className="rounded-2xl flex justify-center items-center mb-20 mt-4 w-full text-white bg-primary p-3 "
              >
                SignUp
              </spam>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
