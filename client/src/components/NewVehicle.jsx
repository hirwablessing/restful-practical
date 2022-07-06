import React from "react";
import { useNavigate } from "react-router-dom";
import PopupMolecule from "./Popup";

export default function NewVehicle() {
  const [showPopup] = React.useState(true);
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
              Chasis Number
            </label>
            <input
              name="names"
              id="names"
              placeholder="Enter Chasis Number"
              required
              className=" rounded-2xl border border-[#DEE2E6]  text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Manufacture Company 
            </label>
            <input
              name="email"
              id="email"
              placeholder="Enter Manufacture Company"
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900"
            >
              Manufacture year
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="enter manufacture year"
              required
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nationa_id"
              className="block text-sm font-semibold text-gray-900"
            >
              Vehicle Price
            </label>
            <input
              type="number"
              max="16"
              min="16"
              required
              name="nationa_id"
              id="nationa_id"
              placeholder="enter manufacture price"
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900"
            >
              Plate no
            </label>
            <input
              required
              name="password"
              id="password"
              type="password"
              placeholder="Enter plate number"
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900"
            >
              Model Name
            </label>
            <input
              required
              name="password"
              id="password"
              type="password"
              placeholder="Enter model name "
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl font-semibold flex justify-center items-center mt-2 w-full text-white bg-primary p-3 "
          >
            Register vehicle
          </button>
        </div>
      </div>
    </PopupMolecule>
  );
}
