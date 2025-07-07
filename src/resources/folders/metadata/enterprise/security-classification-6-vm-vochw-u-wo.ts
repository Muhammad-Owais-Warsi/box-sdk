// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SecurityClassification6VmVochwUWoAPI from '../../../files/metadata/enterprise/security-classification-6-vm-vochw-u-wo';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class SecurityClassification6VmVochwUWo extends APIResource {
  /**
   * Adds a classification to a folder by specifying the label of the classification
   * to add.
   *
   * This API can also be called by including the enterprise ID in the URL
   * explicitly, for example
   * `/folders/:id/enterprise_12345/securityClassification-6VMVochwUWo`.
   *
   * @example
   * ```ts
   * const classification =
   *   await client.folders.metadata.enterprise.securityClassification6VmVochwUWo.addClassification(
   *     '12345',
   *   );
   * ```
   */
  addClassification(
    folderID: string,
    body: SecurityClassification6VmVochwUWoAddClassificationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecurityClassification6VmVochwUWoAPI.Classification> {
    return this._client.post(
      path`/folders/${folderID}/metadata/enterprise/securityClassification-6VMVochwUWo`,
      { body, ...options },
    );
  }

  /**
   * Retrieves the classification metadata instance that has been applied to a
   * folder.
   *
   * This API can also be called by including the enterprise ID in the URL
   * explicitly, for example
   * `/folders/:id/enterprise_12345/securityClassification-6VMVochwUWo`.
   *
   * @example
   * ```ts
   * const classification =
   *   await client.folders.metadata.enterprise.securityClassification6VmVochwUWo.getClassification(
   *     '12345',
   *   );
   * ```
   */
  getClassification(
    folderID: string,
    options?: RequestOptions,
  ): APIPromise<SecurityClassification6VmVochwUWoAPI.Classification> {
    return this._client.get(
      path`/folders/${folderID}/metadata/enterprise/securityClassification-6VMVochwUWo`,
      options,
    );
  }

  /**
   * Removes any classifications from a folder.
   *
   * This API can also be called by including the enterprise ID in the URL
   * explicitly, for example
   * `/folders/:id/enterprise_12345/securityClassification-6VMVochwUWo`.
   *
   * @example
   * ```ts
   * await client.folders.metadata.enterprise.securityClassification6VmVochwUWo.removeClassification(
   *   '12345',
   * );
   * ```
   */
  removeClassification(folderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(
      path`/folders/${folderID}/metadata/enterprise/securityClassification-6VMVochwUWo`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Updates a classification on a folder.
   *
   * The classification can only be updated if a classification has already been
   * applied to the folder before. When editing classifications, only values are
   * defined for the enterprise will be accepted.
   *
   * @example
   * ```ts
   * const classification =
   *   await client.folders.metadata.enterprise.securityClassification6VmVochwUWo.updateClassification(
   *     '12345',
   *     {
   *       body: [
   *         {
   *           op: 'replace',
   *           path: '/Box__Security__Classification__Key',
   *           value: 'Sensitive',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  updateClassification(
    folderID: string,
    params: SecurityClassification6VmVochwUWoUpdateClassificationParams,
    options?: RequestOptions,
  ): APIPromise<SecurityClassification6VmVochwUWoAPI.Classification> {
    const { body } = params;
    return this._client.put(
      path`/folders/${folderID}/metadata/enterprise/securityClassification-6VMVochwUWo`,
      {
        body: body,
        ...options,
        headers: buildHeaders([{ 'Content-Type': 'application/json-patch+json' }, options?.headers]),
      },
    );
  }
}

export interface SecurityClassification6VmVochwUWoAddClassificationParams {
  /**
   * The name of the classification to apply to this folder.
   *
   * To list the available classifications in an enterprise, use the classification
   * API to retrieve the
   * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
   * which lists all available classification keys.
   */
  Box__Security__Classification__Key?: string;
}

export interface SecurityClassification6VmVochwUWoUpdateClassificationParams {
  /**
   * A list containing the one change to make, to update the classification label.
   */
  body: Array<SecurityClassification6VmVochwUWoUpdateClassificationParams.Body>;
}

export namespace SecurityClassification6VmVochwUWoUpdateClassificationParams {
  /**
   * The operation to perform on the classification metadata template instance. In
   * this case, it use used to replace the value stored for the
   * `Box__Security__Classification__Key` field with a new value.
   */
  export interface Body {
    /**
     * The value will always be `replace`.
     */
    op: 'replace';

    /**
     * Defines classifications available in the enterprise.
     */
    path: '/Box__Security__Classification__Key';

    /**
     * The name of the classification to apply to this folder.
     *
     * To list the available classifications in an enterprise, use the classification
     * API to retrieve the
     * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
     * which lists all available classification keys.
     */
    value: string;
  }
}

export declare namespace SecurityClassification6VmVochwUWo {
  export {
    type SecurityClassification6VmVochwUWoAddClassificationParams as SecurityClassification6VmVochwUWoAddClassificationParams,
    type SecurityClassification6VmVochwUWoUpdateClassificationParams as SecurityClassification6VmVochwUWoUpdateClassificationParams,
  };
}
