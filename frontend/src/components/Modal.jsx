import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Modal.css";

const Modal = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or session data
    localStorage.removeItem("authToken"); // Example: Clear token from localStorage
    // Redirect to sign-in page
    navigate("/signin");
  };

  const handleClose = () => {
    // Add logic to close the modal if needed
    console.log("Modal closed");
    navigate("/profile")
  };

  return (
    <div className="darkBg">
      <div className="centered">
        <div className="modal">
          {/* Modal Header */}
          <div className="modalHeader">
            <h5 className="heading">Confirm</h5>
          </div>
          <button className="closeBtn" onClick={handleClose}>
            <RiCloseLine />
          </button>
          {/* Modal Content */}
          <div className="modalContent">Are you sure you want to log out?</div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="logOutBtn" onClick={handleLogout}>
                Log Out
              </button>
              <button className="cancelBtn" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
