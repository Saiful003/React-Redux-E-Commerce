import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineMinus } from "react-icons/ai";
import { BsArrowRightShort, BsPlus } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { useShop } from "../context/shoppingContext";
import styles from "../styles/Product.module.css";
import ButtonGroup from "./ButtonGroup";
import IconHolder from "./IconHolder";
import IconWrapper from "./IconWrapper";
import Image from "./Image";
import SeeButton from "./SeeButton";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Product(props) {
  const {
    productTitle,
    productImage,
    productOfferPrice,
    productOldPrice,
    productVendorCode,
    productId,
  } = props;

  const { addFavourite } = useShop();
  const [isCuttedText, setIsCuttedText] = useState(true);

  return (
    <div className={styles.product__container}>
      <div className={styles.product__img}>
        <Image img={productImage} />
      </div>
      <div className={styles.product__details}>
        <p
          className={styles.product__vendor__code}
        >{`Vendor code : ${productVendorCode}`}</p>
        <h2 className={styles.product__title}>
          {isCuttedText ? (
            <>
              {productTitle.substring(0, 40).trim().concat("... ")}
              <SeeButton
                className="see__more"
                onClick={() => setIsCuttedText((prevState) => !prevState)}
              >
                See more
              </SeeButton>
            </>
          ) : (
            <>
              {productTitle}
              {"\u00A0"}
              <SeeButton
                className="see__less"
                onClick={() => setIsCuttedText((prevState) => !prevState)}
              >
                See less
              </SeeButton>
            </>
          )}
        </h2>
        <p className={styles.price__tag}>Price :</p>
        <div className={styles.product__footer}>
          <div>
            <div className={styles.offer__price}>
              <h2>{`$${productOfferPrice}`}</h2>
              <span className={styles.old__price}>{productOldPrice}</span>
            </div>
          </div>
        </div>
        <Wrapper to={`/product/${productId}`}>
          <p>Purchase from here</p>
          <IconWrapper>
            <BsArrowRightShort size={25} />
          </IconWrapper>
        </Wrapper>
      </div>
      <div className={styles.love__icon}>
        <IconHolder
          onClick={() => addFavourite({ ...props })}
          style={{ background: `hsl(0deg 0% 96%)`, border: `1px solid #ddd` }}
        >
          <AiOutlineHeart fontSize={22} />
        </IconHolder>
      </div>
    </div>
  );
}
const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid hsl(21deg 100% 56%);
  gap: 5px;
  cursor: pointer;
  width: max-content;
  font-weight: bold;
  transition: background-color 200ms ease-in;
  margin-top: 1em;
  &:hover a {
    color: #fff;
  }
  &:hover {
    color: #fff;
    background-color: hsl(21deg 100% 56%);
    border: 1px solid #fff;
  }
`;

export default Product;
