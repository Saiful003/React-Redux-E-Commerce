import React from "react";
import styles from "../styles/Avatar.module.css";

function Avatar({ userImg, size }) {
  return (
    <div style={{ width: size, height: size }} className={styles.avatar}>
      <img src={userImg} />
    </div>
  );
}

export default Avatar;
