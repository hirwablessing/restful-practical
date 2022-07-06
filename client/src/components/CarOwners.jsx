import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {


  const navigate = useNavigate();

  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
              <img src="/img/logo.png" className="w-32" alt="tailus logo" />
            </a>
          </div>

          <ul className="flex flex-col gap-9 tracking-wide mt-[115px] font-semibold">
            <Link
              to={"/owners"}
              aria-label="dashboard"
              className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-primary "
            >
              <img src="/icons/home.svg" />
              <span className="-mr-1">Car owners</span>
            </Link>

            <Link
              to={"/vehicles"}
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            >
              <img src="/icons/vehicle.svg" />
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
                className="w-10 h-10  flex items-center justify-center rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
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

        <div className="px-6 pt-6 2xl:container">
          {/* grid gap-6 md:grid-cols-2 lg:grid-cols-3 */}
          <div className="font-semibold">
            <div className="bg-white p-8 rounded-md w-full">
              <div className=" flex items-center justify-end pb-6">
                <div className="lg:ml-40 ml-10 space-x-8">
                  <button
                    onClick={() => navigate("/new-owner")}
                    className="bg-primary px-5 py-2 rounded-2xl text-white font-semibold tracking-wide cursor-pointer"
                  >
                    Register new vehicle owner
                  </button>
                </div>
              </div>
              <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Names
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Email Address
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            NATIONAL ID
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            PHONE NUMBER
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            ACTIONS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  Dana Moore
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              emmy@gmail.com
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              1199234885080378
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              0788346262
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex gap-4">
                              <span>icon</span>

                              <span>icon</span>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  Dana Moore
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              emmy@gmail.com
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              1199234885080378
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              0788346262
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex gap-4">
                              <span>icon</span>

                              <span>icon</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-xs xs:text-sm text-gray-900">
                      Showing 1 to 4 of 50 Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                      <button className="text-sm text-lightblue transition duration-150 hover:bg-primary bg-primary font-semibold py-2 px-4 rounded-l">
                        Prev
                      </button>
                      &nbsp; &nbsp;
                      <button className="text-sm text-lightblue transition duration-150 hover:bg-primary bg-primary font-semibold py-2 px-4 rounded-r">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
