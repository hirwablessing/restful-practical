import React from "react";

export default function Signup() {
  return (
    <div className="">
      <div className="w-full overflow-hidden rounded-3xl bg-white ">
        <div className="w-full md:flex">
          <div className="hidden w-1/2 items-center justify-center bg-lightblue py-10 px-10 md:flex md:flex-col md:gap-[33px]">
            <img src="/img/logo.png" alt="rra logo" srcset="" />
            <p className="text-primary font-bold tex-base">
              Welcome to <br />
              vehicle management system
            </p>
          </div>
          <div className="w-full py-10 px-5  md:flex md:justify-center md:items-center  md:px-10">
            <form className="md:ml-[50px]">
              <div className="mb-10 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-900">Sign up</h1>
                <p className="flex gap-1 text-base">
                  <span className="text-[#ADB5BD]">
                    {" "}
                    Already have an account?
                  </span>{" "}
                  <a className="text-primary" href="/">
                    Login
                  </a>
                </p>
              </div>

              <div className="-mx-3 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="names"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Full names
                  </label>
                  <input
                    name="names"
                    id="names"
                    placeholder="John Doe"
                    required
                    className=" rounded-2xl border border-[#DEE2E6]  text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>

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
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="0786090674"
                    required
                    className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nationa_id"
                    className="block text-sm font-medium text-gray-900"
                  >
                    National Id
                  </label>
                  <input
                    type="number"
                    max="16"
                    min="16"
                    required
                    name="nationa_id"
                    id="nationa_id"
                    placeholder="1200456783452375"
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
