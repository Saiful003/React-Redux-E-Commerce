import React from "react";
import { useShop } from "../context/shoppingContext";
import styles from "../styles/Category.module.css";

function Category({ icon, text }) {
  const { searchProductAccordingToCategory } = useShop();
  return (
    <div
      onClick={() => searchProductAccordingToCategory(text)}
      className={styles.category__container}
    >
      {icon}
      <p className={styles.title}> {text} </p>
    </div>
  );
}

export default Category;
