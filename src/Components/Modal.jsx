import React, { useContext } from "react";

import { ModalContext } from "../Pages/ChatWindow";

function Modal() {
  const { modalImage, setModalImage } = useContext(ModalContext);
  debugger;
  console.log(modalImage);

  const closeModal = () => setModalImage(null);
  if (modalImage != null) {
    debugger;
    return (
      <>
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-1 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            <img
              className="w-full h-auto rounded-lg"
              style={{
                maxHeight: "70vh",
                maxWidth: "70vh",
              }}
              alt="Modal Image"
              src={`${modalImage}`}
            />
          </div>
        </div>
      </>
    );
  }
  return null;
}

export default Modal;
