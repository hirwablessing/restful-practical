import React from "react";
import { useNavigate } from "react-router-dom";
import PopupMolecule from "./Popup";

export default function LinkToOwner() {
  const [showPopup, setShowPopup] = React.useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <PopupMolecule
        open={showPopup}
        title={"Link Vehicle to owner"}
        onClose={() => navigate(-1)}
      >
        <div className="w-[340px] px-[10px] font-semibold">
          <form action="" className="flex flex-col gap-4 ">
            <label
              htmlFor="owner"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Vehicle owner
            </label>
            <select
              id="owner"
              className="bg-transparent border border-[#DEE2E6] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 outline-none block w-full p-2.5 px-4 font-semibold"
            >
              <option selected>Select vehicle owner</option>
              <option value="US">KAMARI VINCENT</option>
              <option value="CA">KAMARI VINCENT</option>
              <option value="FR">KAMARI VINCENT</option>
              <option value="DE">KAMARI VINCENT</option>
            </select>

            <button
              type="submit"
              className="rounded-xl font-semibold flex justify-center items-center mt-2 w-full text-white bg-primary-600 p-3 "
            >
              Register vehicle
            </button>
          </form>
        </div>
      </PopupMolecule>
    </div>
  );
}
