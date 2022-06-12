import React from "react";
import styles from "../styles/Image.module.css";

function Image({ img }) {
  return (
    <div className={styles.image__wrapper}>
      <img src={img} alt="" />
    </div>
  );
}

export default Image;
