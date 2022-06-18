import Header from "./Header";
import { Container } from "../styled-component/common";
function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}

export default Layout;
