// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SecurityClassification6VmVochwUWoAPI from './security-classification-6-vm-vochw-u-wo';
import {
  Classification,
  SecurityClassification6VmVochwUWo,
  SecurityClassification6VmVochwUWoAddParams,
  SecurityClassification6VmVochwUWoUpdateParams,
} from './security-classification-6-vm-vochw-u-wo';

export class Enterprise extends APIResource {
  securityClassification6VmVochwUWo: SecurityClassification6VmVochwUWoAPI.SecurityClassification6VmVochwUWo =
    new SecurityClassification6VmVochwUWoAPI.SecurityClassification6VmVochwUWo(this._client);
}

Enterprise.SecurityClassification6VmVochwUWo = SecurityClassification6VmVochwUWo;

export declare namespace Enterprise {
  export {
    SecurityClassification6VmVochwUWo as SecurityClassification6VmVochwUWo,
    type Classification as Classification,
    type SecurityClassification6VmVochwUWoUpdateParams as SecurityClassification6VmVochwUWoUpdateParams,
    type SecurityClassification6VmVochwUWoAddParams as SecurityClassification6VmVochwUWoAddParams,
  };
}
