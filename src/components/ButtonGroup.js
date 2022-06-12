import styles from "../styles/ButtonGroup.module.css";

export default function ButtonGroup({ children, gap }) {
  return (
    <div style={{ gap: gap }} className={styles.button__group}>
      {children}
    </div>
  );
}
