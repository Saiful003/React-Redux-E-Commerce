import { useShop } from "../context/shoppingContext";
import ListItem from "./ListItem";
import IconWrapper from "./IconWrapper";
import { IconContext } from "react-icons/lib";
import styles from "../styles/CartPage.module.css";
import styled from "styled-components";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Icon from "./Icon";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    cart,
    getIndividualPrice,
    decreaseProductQuantity,
    deleteProduct,
    addProduct,
    getTotalPrice,
    getTotalQuantity,
    handleDeleteCart,
  } = useShop();

  return (
    <div className={styles.cart__wrapper}>
      <div className={styles.cart__page}>
        {cart.length === 0 && (
          <h3> No more Product available in your cart! </h3>
        )}
        {cart.map((product) => (
          <ListItem key={product.productId}>
            <div className="product__image">
              <img src={product.productImage} />
            </div>
            <div className="product__info">
              <h4 className={styles.product__title}>
                {product.productTitle.substring(0, 40).trim().concat("...")}
              </h4>
              <p className={styles.product__price}>
                {`Price : $${getIndividualPrice(product.productId)}`}
              </p>
              <p className={styles.product__quantity}>
                {`Quantity : ${product.quantity}`}
              </p>
              <ButtonWrapper>
                <IconContext.Provider value={{ size: 20, color: "white" }}>
                  <Icon
                    disabled={product.quantity === 1}
                    onClick={() => decreaseProductQuantity(product.productId)}
                  >
                    <IconWrapper>
                      <AiOutlineMinus />
                    </IconWrapper>
                  </Icon>
                  <Icon onClick={() => addProduct({ ...product })}>
                    <IconWrapper>
                      <AiOutlinePlus />
                    </IconWrapper>
                  </Icon>
                  <Icon
                    bg="hsl(0deg 100% 50%)"
                    hoverColor="hsl(0deg 100% 44%)"
                    onClick={() => deleteProduct(product.productId)}
                  >
                    <IconWrapper>
                      <AiOutlineDelete />
                    </IconWrapper>
                  </Icon>
                </IconContext.Provider>
              </ButtonWrapper>
              <LinkBtn to={`/product/${product.productId}`}>
                Back to Product Details
              </LinkBtn>
            </div>
          </ListItem>
        ))}
        <CartFooter>
          <h3>{`Total Price = $${getTotalPrice()}`} </h3>
          <h3>{`Total Quantity = ${getTotalQuantity()}`} </h3>
          <DeleteButton onClick={handleDeleteCart}>
            Delete All Products
          </DeleteButton>
        </CartFooter>
      </div>
    </div>
  );
}

//styles
const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;
const DeleteButton = styled.a`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: hsl(21deg 100% 56%);
  color: #fff;
  font-weight: bold;
  transition: background-color 100ms ease-in;
  &:hover {
    background-color: hsl(21deg 100% 46%);
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

const LinkBtn = styled(Link)`
  color: hsl(21deg 100% 56%);
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;

export default CartPage;
