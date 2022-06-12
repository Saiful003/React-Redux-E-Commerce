import React from "react";
import Button from "./Button";

function Modal({ closeModal }) {
  return (
    <div open className="modal">
      <Button onClick={closeModal}> Close Modal </Button>
    </div>
  );
}

export default Modal;
