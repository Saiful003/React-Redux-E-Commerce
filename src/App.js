import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="myApp">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}
export default App;
