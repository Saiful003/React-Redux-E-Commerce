import React from "react";
import styles from "../styles/PostFooter.module.css";

function PostFooter({ children }) {
  return <div className={styles.post__footer__wrapper}>{children}</div>;
}

export default PostFooter;
