/**
 * @flow
 * @relayHash c0c08fe87dc4ec855b4ce87711b92862
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LightningOfferRuleInput = {|
  id?: ?string,
  sku?: ?string,
  startDate?: ?any,
  endDate?: ?any,
|};
export type Form_MutationVariables = {|
  rule?: ?LightningOfferRuleInput
|};
export type Form_MutationResponse = {|
  +viewer: ?{|
    +lightningOffer: ?{|
      +id: ?string,
      +sku: ?string,
      +startDate: ?any,
      +endDate: ?any,
    |}
  |}
|};
export type Form_Mutation = {|
  variables: Form_MutationVariables,
  response: Form_MutationResponse,
|};
*/


/*
mutation Form_Mutation(
  $rule: LightningOfferRuleInput
) {
  viewer {
    lightningOffer(rule: $rule) {
      id
      sku
      startDate
      endDate
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "rule",
    "type": "LightningOfferRuleInput",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "lightningOffer",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "rule",
      "variableName": "rule"
    }
  ],
  "concreteType": "LightningOfferRule",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sku",
      "args": null,
      "storageKey": null
    },
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
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "Form_Mutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "ViewerMutation",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Form_Mutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "ViewerMutation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "Form_Mutation",
    "id": null,
    "text": "mutation Form_Mutation(\n  $rule: LightningOfferRuleInput\n) {\n  viewer {\n    lightningOffer(rule: $rule) {\n      id\n      sku\n      startDate\n      endDate\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f10605ef2c6deb3ba381177ec0849e2e';
module.exports = node;
