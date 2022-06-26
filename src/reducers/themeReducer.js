import { ACTIONS } from "../actions/actions";

export const initialState = {
  isLightTheme: true,
};

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_THEME: {
      return { ...state, isLightTheme: !state.isLightTheme };
    }

    default: {
      return state;
    }
  }
}
