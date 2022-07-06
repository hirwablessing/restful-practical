import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="bg-primary-400 min-h-screen py-10">
      <div className="w-[500px] bg-white py-10 mx-auto rounded-lg">
        <img src="/img/logo.png" alt="rra logo" className="w-64 block mx-auto" />
        <form className="mt-12 px-10">
          <div className="mb-10 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-black">Create account</h1>
            <p className="flex gap-1 text-base">
              <span className="text-[#ADB5BD] font-semibold">
                Already have an account?
              </span>
              <Link className="text-primary-600 font-semibold" to="/login">
                Sign in
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="names"
                className="block text-sm font-semibold "
              >
                Full names
              </label>
              <input
                name="names"
                id="names"
                placeholder="John Doe"
                required
                className=" rounded-xl border border-[#DEE2E6]   sm:text-sm outline-none focus:ring-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold "
              >
                Email address
              </label>
              <input
                name="email"
                id="email"
                placeholder="john@gmail.com"
                className=" rounded-xl border border-gray-400 text-black  sm:text-sm outline-none focus:ring-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold "
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="0786090674"
                required
                className=" rounded-xl border border-gray-400 text-black  sm:text-sm outline-none focus:ring-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="nationa_id"
                className="block text-sm font-semibold "
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
                className=" rounded-xl border border-gray-400 text-black  sm:text-sm outline-none focus:ring-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold "
              >
                Password
              </label>
              <input
                required
                name="password"
                id="password"
                type="password"
                placeholder="Enter password"
                className=" rounded-xl border border-gray-400 text-black  sm:text-sm outline-none focus:ring-blue-500 block w-full p-2.5"
              />
            </div>
          </div> <button
            type="submit"
            className="mt-6 mb-4 rounded-xl font-semibold flex justify-center items-center w-full text-white bg-primary-600 p-3 "
          >
            Create account
          </button>
        </form>
      </div >
    </div >
  )
}