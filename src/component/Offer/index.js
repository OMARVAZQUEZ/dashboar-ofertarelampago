import React from "react";
import styles from "./index.module.sass";
import Button from "../Button";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Link } from "react-router-dom";

const Offer = props => {
  const { id, sku, startDate, endDate } = props.data;
  return (
    <div className={styles.content}>
      <div className={styles.leftBox}>
        <h3 className={styles.offerId}>{id}</h3>
        <p className={styles.skuNumber}>sku: {sku} </p>
        <div className={styles.dateRange}>
          {startDate} - {endDate}
        </div>
      </div>
      <div className={styles.rigthBox}>
        <Link
          to={`/editar/${id}`}
          onClick={() => {
            localStorage.offerData = JSON.stringify(props.data);
          }}
        >
          <Button type="secondary">
            <i className="material-icons">create</i>
            <span> Editar</span>
          </Button>
        </Link>
        <Button type="delete">
          <i className="material-icons">delete</i>
          <span>Eliminar</span>
        </Button>
      </div>
    </div>
  );
};

export default createFragmentContainer(Offer, {
  data: graphql`
    fragment Offer_data on LightningOfferRule {
      id
      startDate
      endDate
      sku
    }
  `
});
