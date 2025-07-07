// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MetadataAPI from './metadata';
import * as EnterpriseAPI from './enterprise/enterprise';
import { Enterprise } from './enterprise/enterprise';
import * as GlobalAPI from './global/global';
import { Global } from './global/global';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Metadata extends APIResource {
  enterprise: EnterpriseAPI.Enterprise = new EnterpriseAPI.Enterprise(this._client);
  global: GlobalAPI.Global = new GlobalAPI.Global(this._client);

  /**
   * Applies an instance of a metadata template to a file.
   *
   * In most cases only values that are present in the metadata template will be
   * accepted, except for the `global.properties` template which accepts any
   * key-value pair.
   *
   * @example
   * ```ts
   * const metadataFull = await client.files.metadata.create(
   *   'properties',
   *   { file_id: '12345', scope: 'global' },
   * );
   * ```
   */
  create(
    templateKey: string,
    params: MetadataCreateParams,
    options?: RequestOptions,
  ): APIPromise<MetadataFull> {
    const { file_id, scope, body } = params;
    return this._client.post(path`/files/${file_id}/metadata/${scope}/${templateKey}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Retrieves the instance of a metadata template that has been applied to a file.
   *
   * @example
   * ```ts
   * const metadataFull = await client.files.metadata.retrieve(
   *   'properties',
   *   { file_id: '12345', scope: 'global' },
   * );
   * ```
   */
  retrieve(
    templateKey: string,
    params: MetadataRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MetadataFull> {
    const { file_id, scope } = params;
    return this._client.get(path`/files/${file_id}/metadata/${scope}/${templateKey}`, options);
  }

  /**
   * Updates a piece of metadata on a file.
   *
   * The metadata instance can only be updated if the template has already been
   * applied to the file before. When editing metadata, only values that match the
   * metadata template schema will be accepted.
   *
   * The update is applied atomically. If any errors occur during the application of
   * the operations, the metadata instance will not be changed.
   *
   * @example
   * ```ts
   * const metadataFull = await client.files.metadata.update(
   *   'properties',
   *   { file_id: '12345', scope: 'global' },
   * );
   * ```
   */
  update(
    templateKey: string,
    params: MetadataUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MetadataFull> {
    const { file_id, scope, body } = params;
    return this._client.put(path`/files/${file_id}/metadata/${scope}/${templateKey}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/json-patch+json' }, options?.headers]),
    });
  }

  /**
   * Retrieves all metadata for a given file.
   *
   * @example
   * ```ts
   * const metadatas = await client.files.metadata.list('12345');
   * ```
   */
  list(fileID: string, options?: RequestOptions): APIPromise<Metadatas> {
    return this._client.get(path`/files/${fileID}/metadata`, options);
  }

  /**
   * Deletes a piece of file metadata.
   *
   * @example
   * ```ts
   * await client.files.metadata.delete('properties', {
   *   file_id: '12345',
   *   scope: 'global',
   * });
   * ```
   */
  delete(templateKey: string, params: MetadataDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { file_id, scope } = params;
    return this._client.delete(path`/files/${file_id}/metadata/${scope}/${templateKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * The base representation of a metadata instance.
 */
export interface Metadata {
  /**
   * The identifier of the item that this metadata instance has been attached to.
   * This combines the `type` and the `id` of the parent in the form `{type}_{id}`.
   */
  $parent?: string;

  /**
   * An ID for the scope in which this template has been applied. This will be
   * `enterprise_{enterprise_id}` for templates defined for use in this enterprise,
   * and `global` for general templates that are available to all enterprises using
   * Box.
   */
  $scope?: string;

  /**
   * The name of the template.
   */
  $template?: string;

  /**
   * The version of the metadata instance. This version starts at 0 and increases
   * every time a user-defined property is modified.
   */
  $version?: number;
}

/**
 * An instance of a metadata template, which has been applied to a file or folder.
 */
export interface MetadataFull extends Metadata {}

/**
 * The value to be set or tested.
 *
 * Required for `add`, `replace`, and `test` operations. For `add`, if the value
 * exists already the previous value will be overwritten by the new value. For
 * `replace`, the value must exist before replacing.
 *
 * For `test`, the existing value at the `path` location must match the specified
 * value.
 */
export type MetadataInstanceValue = string | number | Array<string>;

/**
 * A list of metadata instances that have been applied to a file or folder.
 */
export interface Metadatas {
  /**
   * A list of metadata instances, as applied to this file or folder.
   */
  entries?: Array<Metadata>;

  /**
   * The limit that was used for this page of results.
   */
  limit?: number;
}

export interface MetadataCreateParams {
  /**
   * Path param: The unique identifier that represents a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id: string;

  /**
   * Path param: The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';

  /**
   * Body param:
   */
  body?: { [key: string]: MetadataCreateParams.Body };
}

export namespace MetadataCreateParams {
  /**
   * A value for each of the fields that are present on the metadata template. For
   * the `global.properties` template this can be a list of zero or more fields, as
   * this template allows for any generic key-value pairs to be stored stored in the
   * template.
   */
  export interface Body {}
}

export interface MetadataRetrieveParams {
  /**
   * The unique identifier that represents a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id: string;

  /**
   * The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';
}

export interface MetadataUpdateParams {
  /**
   * Path param: The unique identifier that represents a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id: string;

  /**
   * Path param: The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';

  /**
   * Body param: A [JSON-Patch](https://tools.ietf.org/html/rfc6902) specification
   * for the changes to make to the metadata instance.
   *
   * The changes are represented as a JSON array of operation objects.
   */
  body?: Array<MetadataUpdateParams.Body>;
}

export namespace MetadataUpdateParams {
  /**
   * A [JSON-Patch](https://tools.ietf.org/html/rfc6902) operation for a change to
   * make to the metadata instance.
   */
  export interface Body {
    /**
     * The location in the metadata JSON object to move or copy a value from. Required
     * for `move` or `copy` operations and must be in the format of a
     * [JSON-Pointer](https://tools.ietf.org/html/rfc6901).
     */
    from?: string;

    /**
     * The type of change to perform on the template. Some of these are hazardous as
     * they will change existing templates.
     */
    op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy';

    /**
     * The location in the metadata JSON object to apply the changes to, in the format
     * of a [JSON-Pointer](https://tools.ietf.org/html/rfc6901).
     *
     * The path must always be prefixed with a `/` to represent the root of the
     * template. The characters `~` and `/` are reserved characters and must be escaped
     * in the key.
     */
    path?: string;

    /**
     * The value to be set or tested.
     *
     * Required for `add`, `replace`, and `test` operations. For `add`, if the value
     * exists already the previous value will be overwritten by the new value. For
     * `replace`, the value must exist before replacing.
     *
     * For `test`, the existing value at the `path` location must match the specified
     * value.
     */
    value?: MetadataAPI.MetadataInstanceValue;
  }
}

export interface MetadataDeleteParams {
  /**
   * The unique identifier that represents a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id: string;

  /**
   * The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';
}

Metadata.Enterprise = Enterprise;
Metadata.Global = Global;

export declare namespace Metadata {
  export {
    type Metadata as Metadata,
    type MetadataFull as MetadataFull,
    type MetadataInstanceValue as MetadataInstanceValue,
    type Metadatas as Metadatas,
    type MetadataCreateParams as MetadataCreateParams,
    type MetadataRetrieveParams as MetadataRetrieveParams,
    type MetadataUpdateParams as MetadataUpdateParams,
    type MetadataDeleteParams as MetadataDeleteParams,
  };

  export { Enterprise as Enterprise };

  export { Global as Global };
}
