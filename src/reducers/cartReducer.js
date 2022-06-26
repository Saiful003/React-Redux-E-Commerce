import { ACTIONS } from "../actions/actions";

export const initialState = {
  cart: [],
};

function handleDeleteProduct(state, action) {
  const newCart = [...state.cart];

  const filteredCart = newCart.filter(
    (product) => product.productId !== action.payload.id
  );
  return { ...state, cart: filteredCart };
}
function handleAddProduct(state, action) {
  const newCart = [...state.cart];

  const currentIndex = newCart.findIndex(
    (item) => item.productId === action.payload.product.productId
  );

  if (currentIndex < 0) {
    newCart.push({ ...action.payload.product, quantity: 1 });
  }
  if (currentIndex >= 0) {
    const currenItem = { ...newCart[currentIndex] };
    currenItem.quantity++;
    newCart[currentIndex] = currenItem;
  }

  return { ...state, cart: newCart };
}
function handleDecreaseProductQuantity(state, action) {
  const newCart = [...state.cart];

  // find index
  const currentIndex = newCart.findIndex(
    (item) => item.productId === action.payload.id
  );
  if (currentIndex >= 0) {
    const currentItem = { ...newCart[currentIndex] };
    if (currentIndex.quantity !== 1) {
      currentItem.quantity--;
    }
    newCart[currentIndex] = currentItem;
  }

  return { ...state, cart: newCart };
}

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT: {
      return handleAddProduct(state, action);
    }
    case ACTIONS.DECREASE_PRODUCT: {
      return handleDecreaseProductQuantity(state, action);
    }
    case ACTIONS.DELETE_PRODUCT: {
      return handleDeleteProduct(state, action);
    }
    case ACTIONS.DELETE_CART: {
      if (state.cart.length === 0) {
        alert("No more Products available in your Cart.Thanks!");
      }
      return {
        ...state,
        cart: [],
      };
    }
    default: {
      return state;
    }
  }
}
