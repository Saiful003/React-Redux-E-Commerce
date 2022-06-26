import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../actions/actions";

export function useFavourite() {
  const { favourite: favouriteProducts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { favourite } = favouriteProducts;
  // add favourite
  function addFavourite(product) {
    dispatch({ type: ACTIONS.ADD_FAVOURITE, payload: product });
  }
  return {
    favourite,
    addFavourite,
  };
}
