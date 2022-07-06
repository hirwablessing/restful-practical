import React from "react";
import { useNavigate } from "react-router-dom";
import PopupMolecule from "./Popup";
import toast from "react-hot-toast";
import { createOwner } from "../services/auth.service";


export default function NewCarOwner() {
  const [showPopup] = React.useState(true);
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    address: "",
    names: "",
    phone: "",
    nationalId: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const user = await createOwner(values);

    if (user.data) {
      toast.success("Owner created successfully", { duration: 3000 });
      setValues({
        address: "",
        names: "",
        phone: "",
        nationalId: "",
      });

      navigate("/owners");
    } else {
      toast.error(user.message);
    }
  }

  return (
    <PopupMolecule
      open={showPopup}
      title={"Register New Car owner"}
      onClose={() => navigate(-1)}
    >
      <div className="px-[10px]">
        <form
          className="-mx-3 flex mt-4 flex-col gap-4"
          onSubmit={handleSubmit}
        >
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
              className=" rounded-xl border border-[#DEE2E6]  text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              owner address
            </label>
            <input
              name="address"
              id="address"
              placeholder="Kigali"
              className=" rounded-xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nationalId"
              className="block text-sm font-semibold text-gray-900"
            >
              Owner national Id
            </label>
            <input
              type="number"
              max="16"
              min="16"
              required
              name="nationalId"
              id="nationa_id"
              placeholder="1200456783452375"
              className=" rounded-xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
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
              onChange={handleChange}
              type="tel"
              name="phone"
              id="phone"
              placeholder="0786090674"
              required
              className=" rounded-xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl font-semibold flex justify-center items-center mt-2 w-full text-white bg-primary p-3 "
          >
            Register car owner
          </button>
        </form>
      </div>
    </PopupMolecule>
  );
}
