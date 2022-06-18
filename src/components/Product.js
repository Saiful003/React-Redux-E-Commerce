import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useText } from "../hooks/useText";
import { BsArrowRightShort } from "react-icons/bs";
import { IconWrapper } from "../styled-component/common";
import { useShop } from "../context/shoppingContext";
import { AiFillHeart } from "react-icons/ai";
import SingleIcon from "../components/SingleIcon";
import { showToastHandler } from "../utils/toastHandler";

function Product(props) {
  const {
    productId,
    productImage,
    productOfferPrice,
    productOldPrice,
    productTitle,
    productVendorCode,
    category,
    quantity,
  } = props;

  const shortedText = useText(productTitle);
  const [isShortedText, setIsShortedText] = useState(true);
  const { theme, isLightTheme, addFavourite, favourite } = useShop();

  return (
    <ProductContainer theme={theme}>
      <ProductImage>
        <Image src={productImage} />
      </ProductImage>
      <Content isLightTheme={isLightTheme}>
        <ProductCode>{`Vendor code : ${productVendorCode}`}</ProductCode>
        <ProductDesc theme={theme}>
          {isShortedText ? (
            <>
              {shortedText}
              <SeeBtn onClick={() => setIsShortedText(false)}>See more</SeeBtn>
            </>
          ) : (
            <>
              {productTitle}
              &nbsp;
              <SeeBtn onClick={() => setIsShortedText(true)}>See less</SeeBtn>
            </>
          )}
        </ProductDesc>
        <PriceSection theme={theme}>
          <PricePlaceHolder theme={theme}>Price : </PricePlaceHolder>
          <Wrapper>
            <ProductOfferPrice> {productOfferPrice} </ProductOfferPrice>
            <ProductRegularPrice> {productOldPrice} </ProductRegularPrice>
          </Wrapper>
        </PriceSection>
        <PurchaseBtn
          isLightTheme={isLightTheme}
          theme={theme}
          to={`/product/${productId}`}
        >
          <div>Purchase from here</div>
          <IconWrapper>
            <BsArrowRightShort fontSize={25} />
          </IconWrapper>
        </PurchaseBtn>
      </Content>
      <FavouriteBtnContainer
        onClick={() => {
          addFavourite({ ...props });
          const fIndex = favourite.findIndex(
            (item) => item.productId === productId
          );
          if (fIndex < 0) {
            showToastHandler({
              text: "Added to favourite!",
              type: "success",
            });
          }
          if (fIndex >= 0) {
            showToastHandler({
              text: "Already Added to favourite!",
              type: "error",
            });
          }
        }}
      >
        <SingleIcon onlyIcon icon={<AiFillHeart fill="red" size={23} />} />
      </FavouriteBtnContainer>
    </ProductContainer>
  );
}

const FavouriteBtnContainer = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
  aspect-ratio: 1;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(133deg 100% 89%);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: #00cc2c;
  }

  &:hover svg {
    fill: white;
  }
`;

const SeeBtn = styled.span`
  font-weight: 700;
  color: hsl(133deg 100% 40%);
  cursor: pointer;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 15px;
`;
const ProductContainer = styled.div`
  position: relative;
  border: ${(props) => {
    const { theme } = props;
    const { borderColor } = theme;
    return `1px solid ${borderColor}`;
  }};
  align-self: flex-start;
`;
export const ProductImage = styled.div``;
const Image = styled.img`
  aspect-ratio: 3 / 2;
`;
const Content = styled.div`
  background-color: ${({ isLightTheme }) =>
    isLightTheme ? "#fff" : "hsl(0deg 0% 18%)"};
  padding: 20px 15px;
`;
const ProductCode = styled.p`
  color: #898989;
  margin-bottom: 15px;
`;
const ProductDesc = styled.p`
  color: ${({ theme }) => {
    const { textColor } = theme;
    return textColor;
  }};
  margin-bottom: 15px;
`;
const PriceSection = styled.div`
  color: ${({ theme }) => {
    const { textColor } = theme;
    return textColor;
  }};
`;
const PurchaseBtn = styled(Link)`
  display: flex;
  gap: 0.3em;
  width: max-content;
  text-decoration: none;
  border: 1px solid hsl(133deg 100% 40%);
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
  color: ${({ theme }) => {
    const { textColor } = theme;
    return textColor;
  }};
  transition: all 100ms ease;
  &:hover {
    background-color: hsl(133deg 100% 40%);
    color: #fff;
    border: ${({ isLightTheme }) => {
      return isLightTheme ? "1px solid #fff" : "1px solid hsl(133deg 100% 40%)";
    }};
  }
`;

const PricePlaceHolder = styled.p`
  color: ${({ theme }) => {
    const { textColor } = theme;
    return textColor;
  }};
  font-weight: bold;
  font-size: 1.2rem;
`;
const ProductOfferPrice = styled.h2``;
const ProductRegularPrice = styled.p`
  font-size: 1.1rem;
  color: #a7a7a7;
  text-decoration: line-through;
`;

export default Product;
