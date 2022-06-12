import React from "react";

function Backdrop({ closeModal }) {
  return <div onClick={closeModal} className="modal__backdrop" />;
}

export default Backdrop;
