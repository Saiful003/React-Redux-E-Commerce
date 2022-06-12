import React from "react";
import styles from "../styles/Header.module.css";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.header__wrapper}>
          <TopHeader />
          {/* <BottomHeader /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
