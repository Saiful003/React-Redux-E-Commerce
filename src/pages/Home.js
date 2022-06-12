import React from "react";
import CartPage from "../components/CartPage";
import Products from "../components/Products";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home__wrapper}>
      <Products />
    </div>
  );
}

export default Home;
