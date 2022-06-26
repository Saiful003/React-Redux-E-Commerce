import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/Title";
import { IconWrapper } from "../styled-component/common";
import { BsCartFill } from "react-icons/bs";
import Button from "../components/Button";
import { BsPlus } from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import { showToastHandler } from "../utils/toastHandler";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";
import { useTheme } from "../hooks/useTheme";

function ProductDetails() {
  const { productId: id } = useParams();
  const { addProduct, decreaseProductQuantity, deleteProduct } = useCart();
  const { products } = useProducts();
  const { theme } = useTheme();

  function decrease() {
    const { quantity } = getProduct()[0];
    if (quantity === 1) {
      deleteProduct(id);
    } else {
      decreaseProductQuantity(id);
    }
  }

  function getProduct() {
    const productArr = [];
    const productObj = products.find((product) => product.productId === id);
    productArr.push(productObj);
    return productArr;
  }

  return (
    <div>
      {getProduct().map((product) => {
        const {
          productId,
          productImage,
          productOfferPrice,
          productOldPrice,
          productTitle,
          productVendorCode,
          category,
          quantity,
        } = product;

        return (
          <Container key={productId} theme={theme}>
            <ProductImage>
              <Image src={productImage} />
            </ProductImage>
            <div>
              <ProductDesc>
                <Title>{productTitle}</Title>
                <div>
                  {quantity >= 1 ? (
                    <ButtonGroup>
                      <IconContext.Provider value={{ size: 20, color: "#fff" }}>
                        <Button
                          onClick={decrease}
                          icon={<HiOutlineMinusSm />}
                        />
                        <span> {quantity} </span>
                        <Button
                          onClick={() => addProduct({ ...product })}
                          icon={<BsPlus />}
                        />
                      </IconContext.Provider>
                    </ButtonGroup>
                  ) : (
                    <AdcButton
                      onClick={() => {
                        addProduct({ ...product });
                        showToastHandler({
                          text: "Added to cart!",
                          type: "success",
                        });
                      }}
                    >
                      <div>Add To Cart</div>
                      <IconWrapper>
                        <BsCartFill size={20} />
                      </IconWrapper>
                    </AdcButton>
                  )}
                </div>
              </ProductDesc>
            </div>
          </Container>
        );
      })}
    </div>
  );
}

const Container = styled.div`
  display: flex;
  width: max-content;
  border: ${(props) => {
    const { theme } = props;
    const { borderColor } = theme;
    return `1px solid ${borderColor}`;
  }};

  gap: 1.5em;
`;
const Image = styled.img``;
const ProductImage = styled.div``;
const ProductDesc = styled.div`
  padding: 10px 0;
  max-width: 700px;
`;
const AdcButton = styled.a`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 10px 12px;
  gap: 0.6em;
  cursor: pointer;
  color: #fff;
  background-color: hsl(133deg 100% 40%);
  font-weight: 700;
  border-radius: 5px;
  transition: all 200ms ease;
  &:hover {
    background-color: hsl(133deg 100% 35%);
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6em;
`;

export default ProductDetails;
