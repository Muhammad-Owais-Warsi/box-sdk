// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class SecurityClassification6VmVochwUWo extends APIResource {
  /**
   * Retrieves the classification metadata instance that has been applied to a file.
   *
   * This API can also be called by including the enterprise ID in the URL
   * explicitly, for example
   * `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
   *
   * @example
   * ```ts
   * const classification =
   *   await client.files.metadata.enterprise.securityClassification6VmVochwUWo.retrieve(
   *     '12345',
   *   );
   * ```
   */
  retrieve(fileID: string, options?: RequestOptions): APIPromise<Classification> {
    return this._client.get(
      path`/files/${fileID}/metadata/enterprise/securityClassification-6VMVochwUWo`,
      options,
    );
  }

  /**
   * Updates a classification on a file.
   *
   * The classification can only be updated if a classification has already been
   * applied to the file before. When editing classifications, only values are
   * defined for the enterprise will be accepted.
   *
   * @example
   * ```ts
   * const classification =
   *   await client.files.metadata.enterprise.securityClassification6VmVochwUWo.update(
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
  update(
    fileID: string,
    params: SecurityClassification6VmVochwUWoUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Classification> {
    const { body } = params;
    return this._client.put(path`/files/${fileID}/metadata/enterprise/securityClassification-6VMVochwUWo`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/json-patch+json' }, options?.headers]),
    });
  }

  /**
   * Adds a classification to a file by specifying the label of the classification to
   * add.
   *
   * This API can also be called by including the enterprise ID in the URL
   * explicitly, for example
   * `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
   *
   * @example
   * ```ts
   * const classification =
   *   await client.files.metadata.enterprise.securityClassification6VmVochwUWo.add(
   *     '12345',
   *   );
   * ```
   */
  add(
    fileID: string,
    body: SecurityClassification6VmVochwUWoAddParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Classification> {
    return this._client.post(path`/files/${fileID}/metadata/enterprise/securityClassification-6VMVochwUWo`, {
      body,
      ...options,
    });
  }

  /**
   * Removes any classifications from a file.
   *
   * This API can also be called by including the enterprise ID in the URL
   * explicitly, for example
   * `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
   *
   * @example
   * ```ts
   * await client.files.metadata.enterprise.securityClassification6VmVochwUWo.remove(
   *   '12345',
   * );
   * ```
   */
  remove(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(
      path`/files/${fileID}/metadata/enterprise/securityClassification-6VMVochwUWo`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

/**
 * An instance of the classification metadata template, containing the
 * classification applied to the file or folder.
 *
 * To get more details about the classification applied to an item, request the
 * classification metadata template.
 */
export interface Classification {
  /**
   * Whether an end user can change the classification.
   */
  $canEdit?: boolean;

  /**
   * The identifier of the item that this metadata instance has been attached to.
   * This combines the `type` and the `id` of the parent in the form `{type}_{id}`.
   */
  $parent?: string;

  /**
   * The scope of the enterprise that this classification has been applied for.
   *
   * This will be in the format `enterprise_{enterprise_id}`.
   */
  $scope?: string;

  /**
   * The value will always be `securityClassification-6VMVochwUWo`.
   */
  $template?: 'securityClassification-6VMVochwUWo';

  /**
   * The unique ID of this classification instance. This will be include the name of
   * the classification template and a unique ID.
   */
  $type?: string;

  /**
   * The version of the metadata template. This version starts at 0 and increases
   * every time the template is updated. This is mostly for internal use.
   */
  $typeVersion?: number;

  /**
   * The version of the metadata instance. This version starts at 0 and increases
   * every time a classification is updated.
   */
  $version?: number;

  /**
   * The name of the classification applied to the item.
   */
  Box__Security__Classification__Key?: string;
}

export interface SecurityClassification6VmVochwUWoUpdateParams {
  /**
   * A list containing the one change to make, to update the classification label.
   */
  body: Array<SecurityClassification6VmVochwUWoUpdateParams.Body>;
}

export namespace SecurityClassification6VmVochwUWoUpdateParams {
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
     * The name of the classification to apply to this file.
     *
     * To list the available classifications in an enterprise, use the classification
     * API to retrieve the
     * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
     * which lists all available classification keys.
     */
    value: string;
  }
}

export interface SecurityClassification6VmVochwUWoAddParams {
  /**
   * The name of the classification to apply to this file.
   *
   * To list the available classifications in an enterprise, use the classification
   * API to retrieve the
   * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
   * which lists all available classification keys.
   */
  Box__Security__Classification__Key?: string;
}

export declare namespace SecurityClassification6VmVochwUWo {
  export {
    type Classification as Classification,
    type SecurityClassification6VmVochwUWoUpdateParams as SecurityClassification6VmVochwUWoUpdateParams,
    type SecurityClassification6VmVochwUWoAddParams as SecurityClassification6VmVochwUWoAddParams,
  };
}
