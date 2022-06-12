import styled from "styled-components";

function Icon({ hoverColor, bg, disabled, onClick, children }) {
  return (
    <IconContainer
      bg={bg}
      hoverColor={hoverColor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IconContainer>
  );
}

// styles
const IconContainer = styled.a`
  display: inline-block;
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ bg }) => (bg ? bg : "hsl(21deg 100% 56%)")};
  &:hover {
    background-color: ${({ hoverColor }) =>
      hoverColor ? hoverColor : "hsl(21deg 100% 46%)"};
  }
  pointer-events: ${({ disabled }) => disabled && "none"};
`;

export default Icon;
