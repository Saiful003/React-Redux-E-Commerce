import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Favourite from "./pages/Favourite";
import { MyApp } from "./styled-component/MyApp";
import { useShop } from "./context/shoppingContext";
import SignIn from "./pages/SignIn";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";

function App() {
  const { theme: colors } = useShop();
  return (
    <BrowserRouter>
      <MyApp colors={colors}>
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<Detail />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Toaster />
        </Layout>
      </MyApp>
    </BrowserRouter>
  );
}
export default App;
