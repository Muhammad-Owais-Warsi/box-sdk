// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MetadataTemplatesAPI from '../metadata-templates';
import * as SecurityClassification6VmVochwUWoAPI from './security-classification-6-vm-vochw-u-wo';
import {
  ClassificationTemplate,
  SecurityClassification6VmVochwUWo,
} from './security-classification-6-vm-vochw-u-wo';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Enterprise extends APIResource {
  securityClassification6VmVochwUWo: SecurityClassification6VmVochwUWoAPI.SecurityClassification6VmVochwUWo =
    new SecurityClassification6VmVochwUWoAPI.SecurityClassification6VmVochwUWo(this._client);

  /**
   * Used to retrieve all metadata templates created to be used specifically within
   * the user's enterprise.
   *
   * @example
   * ```ts
   * const metadataTemplates =
   *   await client.metadataTemplates.enterprise.list();
   * ```
   */
  list(
    query: EnterpriseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetadataTemplatesAPI.MetadataTemplates> {
    return this._client.get('/metadata_templates/enterprise', { query, ...options });
  }
}

export interface EnterpriseListParams {
  /**
   * The maximum number of items to return per page.
   */
  limit?: number;

  /**
   * Defines the position marker at which to begin returning results. This is used
   * when paginating using marker-based pagination.
   *
   * This requires `usemarker` to be set to `true`.
   */
  marker?: string;
}

Enterprise.SecurityClassification6VmVochwUWo = SecurityClassification6VmVochwUWo;

export declare namespace Enterprise {
  export { type EnterpriseListParams as EnterpriseListParams };

  export {
    SecurityClassification6VmVochwUWo as SecurityClassification6VmVochwUWo,
    type ClassificationTemplate as ClassificationTemplate,
  };
}
