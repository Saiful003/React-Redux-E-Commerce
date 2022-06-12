import React from "react";

function SeeButton({ children, ...rest }) {
  return <a {...rest}>{children}</a>;
}

export default SeeButton;
