import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../actions/actions";
export function useCart() {
  const { cart: myCart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart } = myCart;
  //add product;
  function addProduct(product) {
    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: { product },
    });
  }
  // decrease quantity
  function decreaseProductQuantity(id) {
    dispatch({
      type: ACTIONS.DECREASE_PRODUCT,
      payload: { id },
    });
  }
  // delete product
  function deleteProduct(id) {
    dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: { id } });
  }
  //delete cart
  function handleDeleteCart() {
    dispatch({ type: ACTIONS.DELETE_CART });
  }
  // get individual price
  function getIndividualPrice(id) {
    const individualCart = cart.filter((item) => item.productId === id);
    return individualCart.reduce(
      (individualTotalPrice, { quantity, productOfferPrice }) => {
        return individualTotalPrice + quantity * parseInt(productOfferPrice);
      },
      0
    );
  }
  // get total cart price
  function getTotalPrice() {
    return cart.reduce((totalPrice, { quantity, productOfferPrice }) => {
      return totalPrice + quantity * parseInt(productOfferPrice);
    }, 0);
  }
  // total quantity
  function getTotalQuantity() {
    return cart.reduce((totalQuantity, { quantity }) => {
      return totalQuantity + quantity;
    }, 0);
  }
  return {
    addProduct,
    decreaseProductQuantity,
    deleteProduct,
    handleDeleteCart,
    getIndividualPrice,
    getTotalPrice,
    getTotalQuantity,
    cart,
  };
}
