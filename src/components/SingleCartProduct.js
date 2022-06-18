import styled from "styled-components";
import Button from "./Button";
import { BsPlus } from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Linked } from "../styled-component/common";
import { useShop } from "../context/shoppingContext";
import { showToastHandler } from "../utils/toastHandler";

function SingleCartProduct(props) {
  const {
    addProduct,
    decreaseProductQuantity,
    deleteProduct,
    getIndividualPrice,
    theme,
  } = useShop();
  const { productId, productImage, productTitle, quantity } = props;
  return (
    <Container theme={theme}>
      <ProductImage>
        <Image src={productImage} />
      </ProductImage>
      <div>
        <ProductTitle>
          {productTitle.substring(0, 40).trim().concat("... ")}
        </ProductTitle>
        <ProductPrice>{`Price : $${getIndividualPrice(
          productId
        )}`}</ProductPrice>
        <Quantity> {`Quantity : ${quantity}`} </Quantity>
        <ButtonGroup>
          <IconContext.Provider value={{ size: 20, color: "#fff" }}>
            <Button
              onClick={() => {
                if (quantity === 1) {
                  showToastHandler({
                    text: "Please Click Delete icon",
                    type: "error",
                  });
                } else {
                  decreaseProductQuantity(productId);
                }
              }}
              icon={<HiOutlineMinusSm />}
            />
            <Button
              onClick={() => addProduct({ ...props })}
              icon={<BsPlus />}
            />
            <Button
              onClick={() => {
                deleteProduct(productId);
                showToastHandler({
                  text: "Product Deleted Successfully!",
                  type: "success",
                });
              }}
              icon={<AiOutlineDelete />}
              lastChild
            />
          </IconContext.Provider>
        </ButtonGroup>
        <Linked to={`/product/${productId}`}>
          Back to product detail page
        </Linked>
      </div>
    </Container>
  );
}

const ProductImage = styled.div`
  align-self: center;
`;
const Container = styled.div`
  display: flex;
  gap: 1.5em;
  border: ${(props) => {
    const { theme } = props;
    const { borderColor } = theme;
    return `1px solid ${borderColor}`;
  }};
  padding: 10px;
`;
const ProductTitle = styled.h4`
  color: #444;
  margin-bottom: 8px;
`;
const ProductPrice = styled.p`
  margin-bottom: 3px;
`;
const Quantity = styled.p`
  margin-bottom: 12px;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;
const Image = styled.img`
  max-width: 200px;
  aspect-ratio: 3 / 2;
`;

export default SingleCartProduct;
