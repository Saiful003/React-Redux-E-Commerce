import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";

function Title({ children }) {
  const { theme } = useTheme();
  return (
    <TitleWrapper theme={theme}>
      <h3> {children} </h3>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  color: ${(props) => {
    const { theme } = props;
    const { textColor } = theme;
    return textColor;
  }};
  margin-bottom: 10px;
  & > * {
  }
`;

export default Title;
