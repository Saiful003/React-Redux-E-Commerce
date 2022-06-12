import React, { useContext, useReducer } from "react";
import { reducer, initialState, ACTIONS } from "../reducer/reducer";

const ShoppingContext = React.createContext();

export function useShop() {
  return useContext(ShoppingContext);
}

export function ShoppingContextProvider({ children }) {
  // useReducer hook ==> the magic
  const [
    { cart, favourite, products, inputValue, categoryName, isLightTheme },
    dispatch,
  ] = useReducer(reducer, initialState);

  // color object

  const theme = isLightTheme
    ? { primaryColor: "red", secondaryColor: "blue" }
    : { primaryColor: "green", secondaryColor: "yellow" };

  //add product;
  function addProduct(product) {
    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: { product },
    });
  }
  // add favourite
  function addFavourite(product) {
    dispatch({ type: ACTIONS.ADD_FAVOURITE, payload: product });
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

  function getTotalQuantity() {
    return cart.reduce((totalQuantity, { quantity }) => {
      return totalQuantity + quantity;
    }, 0);
  }

  // input handler
  function handleInputChange(value) {
    dispatch({ type: ACTIONS.INPUT_HANDLER, payload: value });
  }
  // product filter
  function handleFilterProduct() {
    return products.filter((product) => {
      if (inputValue === "") {
        return product;
      } else if (
        product.productTitle
          .toLowerCase()
          .startsWith(inputValue.trim().toLowerCase()) ||
        product.productTitle
          .toLowerCase()
          .includes(inputValue.trim().toLowerCase())
      ) {
        return product;
      }
    });
  }
  // clear serach field
  function clearSerachField() {
    dispatch({ type: ACTIONS.CLEAR });
  }
  //  search product according to category
  function searchProductAccordingToCategory(categoryName) {
    dispatch({ type: ACTIONS.CATEGORY_SEARCH, payload: categoryName });
  }

  function handleDeleteCart() {
    dispatch({ type: ACTIONS.DELETE_CART });
  }

  function switchThemeHandler() {
    dispatch({ type: ACTIONS.CHANGE_THEME });
  }

  const value = {
    addProduct,
    addFavourite,
    getIndividualPrice,
    decreaseProductQuantity,
    getTotalPrice,
    deleteProduct,
    handleInputChange,
    handleFilterProduct,
    clearSerachField,
    searchProductAccordingToCategory,
    getTotalQuantity,
    handleDeleteCart,
    products,
    favourite,
    cart,
    inputValue,
    categoryName,
    theme,
    switchThemeHandler,
  };

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  );
}
