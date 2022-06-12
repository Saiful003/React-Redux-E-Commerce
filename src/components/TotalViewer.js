import React from "react";
import styles from "../styles/TotalViewer.module.css";

function TotalViewer() {
  return (
    <div>
      <p className={styles.total}>
        Liked by <strong>Rakibul Hasan</strong> and <strong>200 others</strong>
      </p>
    </div>
  );
}

export default TotalViewer;
