import React, {useState} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PopupMolecule from "./Popup";
import { createVehicle } from "../../../server/src/services/auth.service";

export default function NewVehicle() {
  const [showPopup] = React.useState(true);
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    chasisNumber: "",
    manufacturer: "",
    manufactureYear: 0,
    model: "",
    price: 0,
    plateNumber: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const user = await createVehicle(values);

    if (user.data) {
      toast.success("Vehicle created successfully", { duration: 3000 });

      navigate("/vehicles");
    } else {
      toast.error(user.message);
    }
  }

  return (
    <PopupMolecule
      open={showPopup}
      title={"Register New vehicle"}
      onClose={() => navigate(-1)}
    >
      <div className="px-[10px]">
        <form className="-mx-3 flex mt-4 flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="chasisNumber"
              className="block text-sm font-semibold text-gray-900"
            >
              Chasis Number
            </label>
            <input
            onChange={handleChange}
              name="nchasisNumberames"
              id="chasisNumber"
              placeholder="Enter Chasis Number"
              required
              className=" rounded-2xl border border-[#DEE2E6]  text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="manufacturer"
              className="block text-sm font-semibold text-gray-900"
            >
              Manufacture Company 
            </label>
            <input
              name="manufacturer"
              id="manufacturer"
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
            onChange={handleChange}
              name="manufactureYear"
              id="phone"
              type="number"
              placeholder="enter manufacture year"
              required
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="price"
              className="block text-sm font-semibold text-gray-900"
            >
              Vehicle Price
            </label>
            <input
            onChange={handleChange}
              type="number"
              max="16"
              min="16"
              required
              name="price"
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
            onChange={handleChange}
              required
              name="plateNumber"
              id="password"
              placeholder="Enter plate number"
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="model"
              className="block text-sm font-semibold text-gray-900"
            >
              Model Name
            </label>
            <input
            onChange={handleChange}
              required
              name="model"
              placeholder="Enter model name "
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl font-semibold flex justify-center items-center mt-2 w-full text-white bg-primary-600 p-3 "
          >
            Register vehicle
          </button>
        </form>
      </div>
    </PopupMolecule>
  );
}
