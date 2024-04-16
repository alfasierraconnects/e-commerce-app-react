import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../Appwrite/AuthContext";

const AccountModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { logoutUser } = useAuth();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="pt-2 relative">
      <button onClick={() => setModalOpen(true)}>
        <ion-icon size="large" name="person-outline"></ion-icon>
      </button>

      {modalOpen && (
        <div
          ref={modalRef}
          className="rounded-md overflow-hidden bg-fuchsia-300 absolute right-0 top-2 z-50 whitespace-nowrap"
        >
          <div className="flex justify-between items-center bg-fuchsia-950 text-white pl-4">
            <p id="modalTitle">Account</p>
            <button onClick={() => setModalOpen(false)} className="mt-2 mr-2">
              <ion-icon size="large" name="close-circle-outline"></ion-icon>
            </button>
          </div>
          <div className="px-6 py-4 flex flex-col gap-2">
            <p>Your Orders</p>
            <p>Your Addresses</p>
            <button
              className="border-2 border-fuchsia-600 hover:border-fuchsia-950 active:bg-fuchsia-500 px-6 py-1 rounded-full"
              onClick={() => logoutUser()}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountModal;