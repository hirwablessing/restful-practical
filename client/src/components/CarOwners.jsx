import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="px-6 pt-6 2xl:container">
      {/* grid gap-6 md:grid-cols-2 lg:grid-cols-3 */}
      <div className="font-semibold">
        <div className="bg-white p-8 rounded-md w-full">
          <div className=" flex items-center justify-end pb-6">
            <div className="lg:ml-40 ml-10 space-x-8">
              <button className="bg-primary-600 px-5 py-2 rounded-xl text-white font-semibold tracking-wide cursor-pointer">
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
                      <th className="px-5 py-3 border-b-2 bg-primary-500 border-primary-600  text-primary-600 text-left text-xs font-semibold uppercase tracking-wider">
                        Names
                      </th>
                      <th className="px-5 py-3 border-b-2 bg-primary-500 border-primary-600  text-primary-600 text-left text-xs font-semibold uppercase tracking-wider">
                        Email Address
                      </th>
                      <th className="px-5 py-3 border-b-2 bg-primary-500 border-primary-600  text-primary-600 text-left text-xs font-semibold uppercase tracking-wider">
                        NATIONAL ID
                      </th>
                      <th className="px-5 py-3 border-b-2 bg-primary-500 border-primary-600  text-primary-600 text-left text-xs font-semibold uppercase tracking-wider">
                        PHONE NUMBER
                      </th>
                      <th className="px-5 py-3 border-b-2 bg-primary-500 border-primary-600  text-primary-600 text-left text-xs font-semibold uppercase tracking-wider">
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
                  <button className="text-sm text-primary-400 transition duration-150 hover:bg-primary-600 bg-primary-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button className="text-sm text-primary-400 transition duration-150 hover:bg-primary-600 bg-primary-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
