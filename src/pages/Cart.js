import React from "react";
import CartPage from "../components/CartPage";
import PageTitle from "../components/PageTitle";

function Cart() {
  return (
    <>
      <PageTitle title="All of your product lists" />
      <CartPage />
    </>
  );
}

export default Cart;
