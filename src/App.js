import React from "react";
import styles from "./index.module.sass";
import Button from "./component/Button";
import Content from "./view/Content";
import Form from "./view/Form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { QueryRenderer } from "react-relay";
import environment from "./environment";

function App() {
  return (
    <Router>
      <div id={styles.body}>
        <div id={styles.container}>
          <div id={styles.topButtonContainer}>
            <Link id={styles.createLink} to="/create">
              <Button>
                <i className="material-icons">add</i>
                <span>Crear oferta</span>
              </Button>
            </Link>
          </div>
          <Route path="/" exact component={Content} />
          <Route path="/create" component={Form} />
        </div>
      </div>
    </Router>
  );
}

export default App;
