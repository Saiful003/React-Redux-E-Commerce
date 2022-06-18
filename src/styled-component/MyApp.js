import styled from "styled-components";

export const MyApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  min-height: 100vh;
  background-color: ${(props) => {
    const { colors } = props;
    const { bodyColor } = colors;
    return bodyColor;
  }};
`;
