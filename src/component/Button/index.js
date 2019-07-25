import React from "react";
import styles from "./index.module.sass";

function Button({ children, type = "default" }) {
  return <div className={`${styles.button} ${styles[type]}`}>{children}</div>;
}

export default Button;
