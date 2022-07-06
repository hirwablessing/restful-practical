import React from "react";
import { useNavigate } from "react-router-dom";
import PopupMolecule from "./Popup";

export default function NewCarOwner() {
  const [showPopup] = React.useState(true);
  const navigate = useNavigate();

  return (
    <PopupMolecule
      open={showPopup}
      title={"Register New Car owner"}
      onClose={() => navigate(-1)}
    >
      <div className="px-[10px]">
        <div className="-mx-3 flex mt-4 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="names"
              className="block text-sm font-semibold text-gray-900"
            >
              Owner Names
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
              owner email address
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
              htmlFor="nationa_id"
              className="block text-sm font-semibold text-gray-900"
            >
              Owner national Id
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
              Owner phone number
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
          <button
            type="submit"
            className="rounded-2xl font-semibold flex justify-center items-center mt-2 w-full text-white bg-primary p-3 "
          >
            Register car owner
          </button>
        </div>
      </div>
    </PopupMolecule>
  );
}