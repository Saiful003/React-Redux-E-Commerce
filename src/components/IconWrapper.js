import React from "react";
import styles from "../styles/IconWrapper.module.css";

function IconWrapper({ children }) {
  return <div className={styles.icon}>{children}</div>;
}

export default IconWrapper;
