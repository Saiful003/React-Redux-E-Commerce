import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../actions/actions";
export function useTheme() {
  const { theme: myTheme } = useSelector((state) => state);
  const { isLightTheme } = myTheme;
  const dispatch = useDispatch();
  const theme = isLightTheme
    ? {
        primaryColor: "hsl(133deg 100% 40%)",
        textColor: "#444",
        bodyColor: "#fff",
        borderColor: "#ddd",
      }
    : {
        primaryColor: "hsl(0deg 0% 11%)",
        textColor: "#fff",
        bodyColor: "hsl(0deg 0% 21%)",
        borderColor: "#464646",
      };

  function switchThemeHandler() {
    dispatch({ type: ACTIONS.CHANGE_THEME });
  }

  return {
    theme,
    isLightTheme,
    switchThemeHandler,
  };
}
