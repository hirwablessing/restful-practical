import React from "react";
import { useNavigate } from "react-router-dom";
import PopupMolecule from "./Popup";

export default function NewVehicle() {
  const [showPopup, setShowPopup] = React.useState(true);
  const navigate = useNavigate();

  return (
    <PopupMolecule
      open={showPopup}
      title={"Register New vehicle"}
      onClose={() => navigate(-1)}
    >
      <div className="px-[10px]">
        <div className="-mx-3 flex mt-4 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="names"
              className="block text-sm font-semibold text-gray-900"
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
              className="block text-sm font-semibold text-gray-900"
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
              className="block text-sm font-semibold text-gray-900"
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
              className="block text-sm font-semibold text-gray-900"
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
              className="block text-sm font-semibold text-gray-900"
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
          <button
            type="submit"
            className="rounded-2xl font-semibold flex justify-center items-center mt-2 w-full text-white bg-primary-600 p-3 "
          >
            Register vehicle
          </button>
        </div>
      </div>
    </PopupMolecule>
  );
}
