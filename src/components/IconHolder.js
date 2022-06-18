import styles from "../styles/IconHolder.module.css";

function IconHolder({ style, children, ...rest }) {
  return (
    <div style={style} {...rest} className={styles.cart__icons}>
      {children}
    </div>
  );
}

export default IconHolder;
