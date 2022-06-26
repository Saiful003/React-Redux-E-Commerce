import styled from "styled-components";
import Products from "../components/Products";
import Title from "../components/Title";
import { useTheme } from "../hooks/useTheme";

function Home() {
  const { theme } = useTheme();
  return (
    <HomeWrapper theme={theme}>
      <Title>All Products</Title>
      <Products />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  border: ${(props) => {
    const { theme } = props;
    const { borderColor } = theme;
    return `1px solid ${borderColor}`;
  }};
  padding: 10px 20px;
`;

export default Home;
