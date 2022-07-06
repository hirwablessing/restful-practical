import React from "react";
import Popup from "reactjs-popup";

export default function PopupMolecule({
  closeOnClickOutSide = true,
  open,
  title,
  onClose,
  children,
}) {
  return (
    <Popup
      open={open}
      closeOnDocumentClick={closeOnClickOutSide}
      onClose={onClose}
      modal
    >
      <div className="modal block p-8">
        {/* close button  */}
        <div
          className={`flex pb-2 ${title ? "justify-between" : "justify-end"}`}
        >
          {title && <h2 className="font-semibold text-primary-600">{title}</h2>}

          <button className="close outline-none" onClick={onClose}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* content to be renderd in the popup */}
        {children}
      </div>
    </Popup>
  );
}
