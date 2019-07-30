import React from "react";
import styles from "./index.module.sass";
import Button from "./component/Button";
import Content from "./view/Content";
import Form from "./view/Form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { QueryRenderer } from "react-relay";
import environment from "./environment";
import graphql from "babel-plugin-relay/macro";

const query = graphql`
  query App_Query {
    viewer {
      id
      lightningOfferRules {
        ...Offer_data
      }
    }
  }
`;

function App() {
  return (
    <QueryRenderer
      query={query}
      environment={environment}
      render={({ error, props }) => {
        if (error) throw new Error(error);
        if (!props) return <div>Loading...</div>;
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
                <Route
                  path="/"
                  exact
                  render={() => {
                    return <Content rules={props.viewer.lightningOfferRules} />;
                  }}
                />
                <Route path="/create" component={Form} />
                <Route path="/editar/:offerId" component={Form} />
              </div>
            </div>
          </Router>
        );
      }}
    />
  );
}

export default App;
