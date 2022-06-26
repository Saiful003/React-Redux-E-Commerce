import { allProducts } from "../Data/Data";
import { ACTIONS } from "../actions/actions";

export const initialState = {
  products: [...allProducts],
};

function handleAddProduct(state, action) {
  const newProducts = [...state.products];

  const currentProductIndex = newProducts.findIndex(
    (item) => item.productId === action.payload.product.productId
  );
  if (currentProductIndex >= 0) {
    const myProduct = { ...newProducts[currentProductIndex] };
    myProduct.quantity++;
    newProducts[currentProductIndex] = myProduct;
  }

  return { ...state, products: newProducts };
}
function handleDecreaseProductQuantity(state, action) {
  const newProducts = [...state.products];

  // find index
  const currentProductIndex = newProducts.findIndex(
    (item) => item.productId === action.payload.id
  );

  if (currentProductIndex >= 0) {
    const myProduct = { ...newProducts[currentProductIndex] };
    myProduct.quantity--;
    newProducts[currentProductIndex] = myProduct;
  }

  return { ...state, products: newProducts };
}
function handleDeleteProduct(state, action) {
  const newProducts = [...state.products];

  const currentProductIndex = newProducts.findIndex(
    (item) => item.productId === action.payload.id
  );
  if (currentProductIndex >= 0) {
    const myProduct = { ...newProducts[currentProductIndex] };
    myProduct.quantity = 0;
    newProducts[currentProductIndex] = myProduct;
  }
  return { ...state, products: newProducts };
}

export function productsReducer(state = initialState, action) {
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
    default: {
      return state;
    }
  }
}
