import React from "react";
import styles from "../styles/Box.module.css";

function Box({ children, mx }) {
  return (
    <div style={{ marginInline: `${mx}em` }} className={styles.box}>
      {children}
    </div>
  );
}

export default Box;
