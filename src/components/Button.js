import React from "react";
import IconWrapper from "./IconWrapper";
import styles from "../styles/Button.module.css";

function Button({ disabled, endIcon, startIcon, children, ...rest }) {
  return (
    <a
      style={{
        pointerEvents: disabled && "none",
      }}
      className={styles.button}
      {...rest}
    >
      {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
      {children}
      {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
    </a>
  );
}

export default Button;
