import { SubscriptionClient } from "subscriptions-transport-ws";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

const stringify = JSON.stringify;
const store = new Store(new RecordSource());
const websocketUri = "wss://subscriptions.ektdevelopers.com/subscriptions";

const graphqlServicePath = "/_graphql";

const fetchQuery = (operation, variables) => {
  return fetch(`https://api.ektdevelopers.com${graphqlServicePath}`, {
    mode: "cors",
    credentials: "omit",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.token || ""}`
    },
    body: stringify({
      query: operation.text,
      variables: variables
    })
  }).then(res => res.json());
};

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text;
  const subscriptionClient = new SubscriptionClient(websocketUri, {
    reconnect: true
  });

  subscriptionClient
    .request({
      query,
      variables
    })
    .subscribe(result => {
      observer.onNext(result);
    });
};

const network = Network.create(fetchQuery, setupSubscription);

const environment = new Environment({
  store,
  network
});

export default environment;
