import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("You must be logged in to access this page", {
      duration: 3000,
    });

    return <Navigate to="/login" />;
  }

  return (
    <div>
      <aside className="ml-[-100%] bg-primary-400 fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
              <img src="/img/logo.png" className="w-32" alt="tailus logo" />
            </a>
          </div>

          <ul className="flex flex-col gap-9 tracking-wide mt-[115px] font-semibold">
            <Link
              to={"owners"}
              aria-label="dashboard"
              className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-primary-600 "
            >
              <img src="/icons/user-green.svg" />
              <span className="-mr-1">Car owners</span>
            </Link>

            <Link
              to={"vehicles"}
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-primary-600 group"
            >
              <img src="/icons/vehicle-green.svg" />
              <span className="group-hover:text-gray-700">Vehicle</span>
            </Link>
          </ul>
        </div>
      </aside>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5
              hidden
              className="text-2xl text-gray-600 font-semibold lg:block"
            >
              Welcome back
            </h5>

            <div className="flex space-x-4">
              <button
                aria-label="chat"
                className="w-10 h-10  flex items-center justify-center rounded-xl border bg-primary-500 focus:bg-primary-500 active:bg-gray-200"
              >
                <img src="/icons/logout.svg" alt="tailus logo" />
              </button>
              <button
                aria-label="notification"
                className="w-10 h-10 rounded-xl  "
              >
                <img src="/icons/user.png" alt="tailus logo" />
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
