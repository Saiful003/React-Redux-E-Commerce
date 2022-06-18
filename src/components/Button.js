import styled from "styled-components";
import { IconWrapper } from "../styled-component/common";

function Button({ lastChild, onClick, icon, ...rest }) {
  return (
    <MyButton lastChild={lastChild} onClick={onClick} {...rest}>
      <IconWrapper>{icon}</IconWrapper>
    </MyButton>
  );
}

const MyButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  background-color: hsl(133deg 100% 40%);
  border-radius: 5px;
  padding: 8px;
  &:hover {
    background-color: hsl(133deg 100% 35%);
  }
  &:last-of-type {
    background-color: ${({ lastChild }) => lastChild && "hsl(352deg 100% 56%)"};
  }
  &:last-of-type:hover {
    background-color: ${({ lastChild }) => lastChild && "hsl(352deg 100% 46%)"};
  }
`;

export default Button;
