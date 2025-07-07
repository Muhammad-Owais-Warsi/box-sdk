// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SecurityClassification6VmVochwUWoAPI from './security-classification-6-vm-vochw-u-wo';
import {
  SecurityClassification6VmVochwUWo,
  SecurityClassification6VmVochwUWoAddClassificationParams,
  SecurityClassification6VmVochwUWoUpdateClassificationParams,
} from './security-classification-6-vm-vochw-u-wo';

export class Enterprise extends APIResource {
  securityClassification6VmVochwUWo: SecurityClassification6VmVochwUWoAPI.SecurityClassification6VmVochwUWo =
    new SecurityClassification6VmVochwUWoAPI.SecurityClassification6VmVochwUWo(this._client);
}

Enterprise.SecurityClassification6VmVochwUWo = SecurityClassification6VmVochwUWo;

export declare namespace Enterprise {
  export {
    SecurityClassification6VmVochwUWo as SecurityClassification6VmVochwUWo,
    type SecurityClassification6VmVochwUWoAddClassificationParams as SecurityClassification6VmVochwUWoAddClassificationParams,
    type SecurityClassification6VmVochwUWoUpdateClassificationParams as SecurityClassification6VmVochwUWoUpdateClassificationParams,
  };
}
