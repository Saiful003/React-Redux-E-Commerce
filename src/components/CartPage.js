import { useShop } from "../context/shoppingContext";
import SingleCartProduct from "./SingleCartProduct";
import styled from "styled-components";

function CartPage() {
  const { cart, getTotalPrice, getTotalQuantity, theme, handleDeleteCart } =
    useShop();
  return (
    <>
      <Wrapper theme={theme}>
        {cart.length === 0 && (
          <div>
            <h3> No more products in your cart! </h3>
          </div>
        )}
        {cart.map((product) => {
          return <SingleCartProduct {...product} key={product.productId} />;
        })}
        <CartDetails theme={theme}>
          <TotalPrice> Total Price : ${getTotalPrice()} </TotalPrice>
          <TotalQuantity>Total Quantity : {getTotalQuantity()} </TotalQuantity>
        </CartDetails>
        <DeleteButton onClick={handleDeleteCart}>
          Delete all Products
        </DeleteButton>
      </Wrapper>
    </>
  );
}

const DeleteButton = styled.a`
  cursor: pointer;
  align-self: flex-start;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: hsl(133deg 100% 40%);
  transition: all 100ms ease-in;
  color: #fff;
  font-weight: 700;
  &:hover {
    transform: translate(3px, -3px);
    background-color: hsl(133deg 100% 35%);
  }
`;

const CartDetails = styled.div`
  border: ${(props) => {
    const { theme } = props;
    const { borderColor } = theme;
    return `1px solid ${borderColor}`;
  }};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
const TotalPrice = styled.h3``;
const TotalQuantity = styled.h3``;

const Wrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border: ${(props) => {
    const { theme } = props;
    const { borderColor } = theme;
    return `1px solid ${borderColor}`;
  }};
  padding: 10px;
`;

export default CartPage;
