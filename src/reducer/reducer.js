import { allProducts } from "../Data/Data";

export const ACTIONS = {
  ADD_PRODUCT: "addProduct",
  ADD_FAVOURITE: "addFavourite",
  DECREASE_PRODUCT: "decreaseProductQuantity",
  DELETE_PRODUCT: "deleteProduct",
  INPUT_HANDLER: "inputHandler",
  CLEAR: "clear",
  DELETE_CART: "deleteCart",
  CHANGE_THEME: "changeTheme",
};

export const initialState = {
  cart: [],
  favourite: [],
  products: [...allProducts],
  inputValue: "",
  isLightTheme: true,
};

function handleDeleteProduct(state, action) {
  const newCart = [...state.cart];
  const newProducts = [...state.products];

  const currentProductIndex = newProducts.findIndex(
    (item) => item.productId === action.payload.id
  );
  if (currentProductIndex >= 0) {
    const myProduct = { ...newProducts[currentProductIndex] };
    myProduct.quantity = 0;
    newProducts[currentProductIndex] = myProduct;
  }

  const filteredCart = newCart.filter(
    (product) => product.productId !== action.payload.id
  );
  return { ...state, cart: filteredCart, products: newProducts };
}
function handleAddProduct(state, action) {
  const newCart = [...state.cart];
  const newProducts = [...state.products];

  const currentIndex = newCart.findIndex(
    (item) => item.productId === action.payload.product.productId
  );
  const currentProductIndex = newProducts.findIndex(
    (item) => item.productId === action.payload.product.productId
  );
  if (currentProductIndex >= 0) {
    const myProduct = { ...newProducts[currentProductIndex] };
    myProduct.quantity++;
    newProducts[currentProductIndex] = myProduct;
  }

  // cart
  if (currentIndex < 0) {
    newCart.push({ ...action.payload.product, quantity: 1 });
  }
  if (currentIndex >= 0) {
    const currenItem = { ...newCart[currentIndex] };
    currenItem.quantity++;
    newCart[currentIndex] = currenItem;
  }

  return { ...state, cart: newCart, products: newProducts };
}
function handleAddFavourite(state, action) {
  const newFavouriteCart = [...state.favourite];

  const currentIndex = newFavouriteCart.findIndex(
    (item) => item.productId === action.payload.productId
  );

  if (currentIndex < 0) {
    newFavouriteCart.push({ ...action.payload });
  }

  if (currentIndex >= 0) {
    return state;
  }

  return { ...state, favourite: newFavouriteCart };
}
function handleDecreaseProductQuantity(state, action) {
  const newCart = [...state.cart];
  const newProducts = [...state.products];

  // find index
  const currentIndex = newCart.findIndex(
    (item) => item.productId === action.payload.id
  );
  const currentProductIndex = newProducts.findIndex(
    (item) => item.productId === action.payload.id
  );

  if (currentProductIndex >= 0) {
    const myProduct = { ...newProducts[currentProductIndex] };
    myProduct.quantity--;
    newProducts[currentProductIndex] = myProduct;
  }

  if (currentIndex >= 0) {
    const currentItem = { ...newCart[currentIndex] };
    if (currentItem.quantity !== 1) {
      currentItem.quantity--;
    }
    newCart[currentIndex] = currentItem;
  }

  return { ...state, cart: newCart, products: newProducts };
}
export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT: {
      return handleAddProduct(state, action);
    }
    case ACTIONS.ADD_FAVOURITE: {
      return handleAddFavourite(state, action);
    }
    case ACTIONS.DECREASE_PRODUCT: {
      return handleDecreaseProductQuantity(state, action);
    }
    case ACTIONS.DELETE_PRODUCT: {
      return handleDeleteProduct(state, action);
    }
    case ACTIONS.INPUT_HANDLER: {
      const newState = {
        ...state,
        inputValue: action.payload,
      };
      return newState;
    }
    case ACTIONS.CLEAR: {
      return { ...state, inputValue: "" };
    }
    case ACTIONS.DELETE_CART: {
      const newProducts = [...state.products];

      if (state.cart.length === 0) {
        alert("No more Products available in your Cart.Thanks!");
      }

      const upadatedProducts = newProducts.map((_, index) => {
        const currentProduct = { ...newProducts[index] };
        currentProduct.quantity = 0;
        newProducts[index] = currentProduct;
        return currentProduct;
      });

      return {
        ...state,
        products: upadatedProducts,
        cart: [],
      };
    }

    case ACTIONS.CHANGE_THEME: {
      return { ...state, isLightTheme: !state.isLightTheme };
    }

    default: {
      return state;
    }
  }
}
