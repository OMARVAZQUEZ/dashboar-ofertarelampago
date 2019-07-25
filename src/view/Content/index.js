import React from "react";
import styles from "./index.module.sass";
import Offer from "../../component/Offer";

function App() {
  return (
    <div id={styles.content}>
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
    </div>
  );
}

export default App;
