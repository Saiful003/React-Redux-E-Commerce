import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ShoppingContextProvider } from "./context/shoppingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShoppingContextProvider>
    <App />
  </ShoppingContextProvider>
);
