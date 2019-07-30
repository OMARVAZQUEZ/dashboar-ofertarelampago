/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Offer_data$ref: FragmentReference;
declare export opaque type Offer_data$fragmentType: Offer_data$ref;
export type Offer_data = {|
  +id: ?string,
  +startDate: ?any,
  +endDate: ?any,
  +sku: ?string,
  +$refType: Offer_data$ref,
|};
export type Offer_data$data = Offer_data;
export type Offer_data$key = {
  +$data?: Offer_data$data,
  +$fragmentRefs: Offer_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Offer_data",
  "type": "LightningOfferRule",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sku",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4832b9955589fc65cdfdbb27b6ccde48';
module.exports = node;
