import React from "react";
import styles from "./index.module.sass";
import Button from "../Button";

const Offer = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftBox}>
        <h3 className={styles.offerId}>12122465465465465</h3>
        <p className={styles.skuNumber}>sku: 31030272 </p>
        <div className={styles.dateRange}>
          Jul 25 2019 12:40:06 - Jul 25 2019 12:41:06
        </div>
      </div>
      <div className={styles.rigthBox}>
        <Button type="secondary">
          <i className="material-icons">create</i>
          <span> Editar</span>
        </Button>

        <Button type="delete">
          <i className="material-icons">delete</i>
          <span>Eliminar</span>
        </Button>
      </div>
    </div>
  );
};

export default Offer;
