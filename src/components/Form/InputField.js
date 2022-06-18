import React from "react";
import styled from "styled-components";

function InputField({ danger, label, name, ...rest }, ref) {
  return (
    <>
      <label htmlFor={name}> {label} :</label>
      <Input danger={danger} id={name} name={name} ref={ref} {...rest} />
    </>
  );
}

const Input = styled.input`
  padding: 10px 7px;
  border-radius: 5px;
  border: ${({ danger }) => (danger ? "1px solid red" : "1px solid #ddd")};
`;

export default React.forwardRef(InputField);
