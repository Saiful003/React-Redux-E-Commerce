import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../actions/actions";
export function useInput() {
  const { input } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { inputValue } = input;

  // input handler
  function handleInputChange(value) {
    dispatch({ type: ACTIONS.INPUT_HANDLER, payload: value });
  }
  // clear serach field
  function clearSerachField() {
    dispatch({ type: ACTIONS.CLEAR });
  }

  return {
    inputValue,
    handleInputChange,
    clearSerachField,
  };
}
