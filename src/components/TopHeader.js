import React from "react";
import ListItem from "./ListItem";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import { VscSignIn } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";
import Button from "./Button";
import styles from "../styles/TopHeader.module.css";
import IconWrapper from "./IconWrapper";
import { useShop } from "../context/shoppingContext";
import { useNavigate } from "react-router-dom";

function TopHeader() {
  const {
    cart,
    inputValue,
    handleInputChange,
    clearSerachField,
    theme,
    switchThemeHandler,
  } = useShop();
  const navigate = useNavigate();

  function handleNavigateToHome() {
    navigate("/");
  }
  function handleNavigateToCart() {
    navigate("/cart");
  }

  return (
    <div className={styles.top__header}>
      <div className={styles.left__sight}>
        <ul>
          <ListItem>
            <h2 onClick={handleNavigateToHome} className={styles.logo}>
              Daily-Shopping
            </h2>
          </ListItem>
          <ListItem>
            <p>Sell on Shopka</p>
          </ListItem>
        </ul>
      </div>
      <div className={styles.middle__sight}>
        <div className={styles.input__wrapper}>
          <input
            type="text"
            placeholder="Search for Product..."
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <IconContext.Provider
            value={{ size: 20, style: { cursor: "pointer" } }}
          >
            <div className={styles.search__icon}>
              <BsSearch />
            </div>
            <div className={styles.close__icon}>
              <IoMdClose onClick={clearSerachField} />
            </div>
          </IconContext.Provider>
        </div>
        <div className={styles.current__category}>
          <p>Consumer Electronics</p>
          <IconWrapper>
            <RiArrowDownSFill cursor="pointer" />
          </IconWrapper>
        </div>
      </div>
      <div className={styles.right__sight}>
        <IconContext.Provider value={{ size: 20 }}>
          <Button endIcon={<VscSignIn />}>Sign in</Button>
          <Button
            onClick={handleNavigateToCart}
            postition="relative"
            startIcon={<FiShoppingBag />}
          >
            My Cart
          </Button>
        </IconContext.Provider>
        <div
          style={{ display: cart.length === 0 && "none" }}
          className={styles.quantity}
        >
          {cart.length}
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
