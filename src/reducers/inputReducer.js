import { ACTIONS } from "../actions/actions";

export const initialState = {
  inputValue: "",
};

export function inputReducer(state = initialState, action) {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
}
