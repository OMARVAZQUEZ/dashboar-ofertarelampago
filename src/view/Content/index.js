import React from "react";
import styles from "./index.module.sass";
import Offer from "../../component/Offer";

function App(props) {
  return (
    <div id={styles.content}>
      {props.rules.map(rule => {
        return <Offer key={rule.__id} data={rule} />;
      })}
    </div>
  );
}

export default App;
