import React from "react";
import styled from "styled-components";
import CartPage from "../components/CartPage";
import PageTitle from "../components/PageTitle";
import Title from "../components/Title";

function Cart() {
  return (
    <>
      <Title>All of your products list</Title>
      <CartPage />
    </>
  );
}

export default Cart;
