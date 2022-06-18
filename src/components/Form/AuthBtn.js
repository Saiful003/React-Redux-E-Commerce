import React from "react";
import styled from "styled-components";

function AuthBtn({ children }) {
  return <MyButton> {children} </MyButton>;
}

const MyButton = styled.button`
  border: none;
  background-color: hsl(133deg 100% 40%);
  color: #fff;
  font-weight: bold;
  padding: 8px 0;
  border-radius: 5px;
  &:hover {
    background-color: hsl(133deg 100% 35%);
  }
  cursor: pointer;
`;

export default AuthBtn;
