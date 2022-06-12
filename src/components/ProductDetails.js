import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useShop } from "../context/shoppingContext";
import IconHolder from "./IconHolder";

function ProductDetails() {
  const { productId: id } = useParams();
  const { products, addProduct, deleteProduct, decreaseProductQuantity } =
    useShop();

  // functions
  function findProduct() {
    const productArr = [];
    const obj = products.find((product) => product.productId === id);
    productArr.push(obj);
    return productArr;
  }
  function decrease() {
    const { quantity } = findProduct()[0];
    if (quantity === 1) {
      deleteProduct(id);
    } else {
      decreaseProductQuantity(id);
    }
  }

  return (
    <>
      {findProduct().map((product) => {
        const { productTitle, productId, productImage, category, quantity } =
          product;
        return (
          <ProductWrapper key={productId}>
            <ProductImage>
              <img src={productImage} alt="" />
            </ProductImage>
            <Details>
              <Category>{`Category : ${category}`}</Category>
              <Title>
                {productTitle.substring(0, 40).trim().concat("...")}
              </Title>
              {quantity >= 1 ? (
                <ButtonContainer>
                  <IconContext.Provider
                    value={{ style: { cursor: "pointer" }, color: "#fff" }}
                  >
                    <AiOutlineMinus onClick={decrease} />
                    <span> {quantity} </span>
                    <AiOutlinePlus onClick={() => addProduct({ ...product })} />
                  </IconContext.Provider>
                </ButtonContainer>
              ) : (
                <IconHolder onClick={() => addProduct({ ...product })}>
                  <FiShoppingBag fontSize={22} color="#fff" />
                </IconHolder>
              )}
            </Details>
          </ProductWrapper>
        );
      })}
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  width: max-content;
  padding: 5px 12px;
  gap: 1em;
  align-items: center;
  background-color: hsl(21deg 100% 56%);
  border-radius: 5px;
  margin-top: 1em;
  & span {
    color: #fff;
    user-select: none;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  gap: 2em;
`;
const ProductImage = styled.div`
  width: 50%;
`;
const Details = styled.div`
  flex-grow: 1;
`;
const Title = styled.h2``;

const Category = styled.h2``;

export default ProductDetails;
