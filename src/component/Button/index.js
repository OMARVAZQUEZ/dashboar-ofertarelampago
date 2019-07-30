import React from "react";
import styles from "./index.module.sass";

function Button({ children, type = "default", onClick = undefined }) {
  return (
    <div className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
