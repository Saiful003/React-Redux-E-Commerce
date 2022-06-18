import { IconWrapper } from "../styled-component/common";
import { Link } from "react-router-dom";

function SingleIcon({ onlyIcon, onClick, children, icon, route }) {
  return (
    <IconWrapper onClick={onClick}>
      {route && <Link to={`/${route}`}>{icon}</Link>}
      {children}
      {onlyIcon && icon}
    </IconWrapper>
  );
}

export default SingleIcon;
