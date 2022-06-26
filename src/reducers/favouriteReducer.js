import { ACTIONS } from "../actions/actions";

export const initialState = {
  favourite: [],
};

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

export function favouriteReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_FAVOURITE: {
      return handleAddFavourite(state, action);
    }
    default: {
      return state;
    }
  }
}
