/**
 * @flow
 * @relayHash cc67aafadc0154f91ac3383420e26b53
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Offer_data$ref } from "./Offer_data.graphql";
export type App_QueryVariables = {||};
export type App_QueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +lightningOfferRules: ?$ReadOnlyArray<?{|
      +$fragmentRefs: Offer_data$ref
    |}>,
  |}
|};
export type App_Query = {|
  variables: App_QueryVariables,
  response: App_QueryResponse,
|};
*/


/*
query App_Query {
  viewer {
    id
    lightningOfferRules {
      ...Offer_data
      id
    }
  }
}

fragment Offer_data on LightningOfferRule {
  id
  startDate
  endDate
  sku
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "App_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lightningOfferRules",
            "storageKey": null,
            "args": null,
            "concreteType": "LightningOfferRule",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Offer_data",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lightningOfferRules",
            "storageKey": null,
            "args": null,
            "concreteType": "LightningOfferRule",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startDate",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endDate",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "sku",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Query",
    "id": null,
    "text": "query App_Query {\n  viewer {\n    id\n    lightningOfferRules {\n      ...Offer_data\n      id\n    }\n  }\n}\n\nfragment Offer_data on LightningOfferRule {\n  id\n  startDate\n  endDate\n  sku\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dbff4ed31a85dbab212361d49f21aaf0';
module.exports = node;
