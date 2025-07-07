// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MetadataAPI from '../../files/metadata/metadata';
import * as EnterpriseAPI from './enterprise/enterprise';
import { Enterprise } from './enterprise/enterprise';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Metadata extends APIResource {
  enterprise: EnterpriseAPI.Enterprise = new EnterpriseAPI.Enterprise(this._client);

  /**
   * Applies an instance of a metadata template to a folder.
   *
   * In most cases only values that are present in the metadata template will be
   * accepted, except for the `global.properties` template which accepts any
   * key-value pair.
   *
   * To display the metadata template in the Box web app the enterprise needs to be
   * configured to enable **Cascading Folder Level Metadata** for the user in the
   * admin console.
   *
   * @example
   * ```ts
   * const metadataFull =
   *   await client.folders.metadata.createMetadataInstance(
   *     'properties',
   *     { folder_id: '12345', scope: 'global' },
   *   );
   * ```
   */
  createMetadataInstance(
    templateKey: string,
    params: MetadataCreateMetadataInstanceParams,
    options?: RequestOptions,
  ): APIPromise<MetadataAPI.MetadataFull> {
    const { folder_id, scope, body } = params;
    return this._client.post(path`/folders/${folder_id}/metadata/${scope}/${templateKey}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Retrieves the instance of a metadata template that has been applied to a folder.
   * This can not be used on the root folder with ID `0`.
   *
   * @example
   * ```ts
   * const metadataFull =
   *   await client.folders.metadata.getMetadataInstance(
   *     'properties',
   *     { folder_id: '12345', scope: 'global' },
   *   );
   * ```
   */
  getMetadataInstance(
    templateKey: string,
    params: MetadataGetMetadataInstanceParams,
    options?: RequestOptions,
  ): APIPromise<MetadataAPI.MetadataFull> {
    const { folder_id, scope } = params;
    return this._client.get(path`/folders/${folder_id}/metadata/${scope}/${templateKey}`, options);
  }

  /**
   * Retrieves all metadata for a given folder. This can not be used on the root
   * folder with ID `0`.
   *
   * @example
   * ```ts
   * const metadatas =
   *   await client.folders.metadata.listMetadata('12345');
   * ```
   */
  listMetadata(folderID: string, options?: RequestOptions): APIPromise<MetadataAPI.Metadatas> {
    return this._client.get(path`/folders/${folderID}/metadata`, options);
  }

  /**
   * Deletes a piece of folder metadata.
   *
   * @example
   * ```ts
   * await client.folders.metadata.removeMetadataInstance(
   *   'properties',
   *   { folder_id: '12345', scope: 'global' },
   * );
   * ```
   */
  removeMetadataInstance(
    templateKey: string,
    params: MetadataRemoveMetadataInstanceParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { folder_id, scope } = params;
    return this._client.delete(path`/folders/${folder_id}/metadata/${scope}/${templateKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates a piece of metadata on a folder.
   *
   * The metadata instance can only be updated if the template has already been
   * applied to the folder before. When editing metadata, only values that match the
   * metadata template schema will be accepted.
   *
   * The update is applied atomically. If any errors occur during the application of
   * the operations, the metadata instance will not be changed.
   *
   * @example
   * ```ts
   * const metadataFull =
   *   await client.folders.metadata.updateMetadataInstance(
   *     'properties',
   *     { folder_id: '12345', scope: 'global' },
   *   );
   * ```
   */
  updateMetadataInstance(
    templateKey: string,
    params: MetadataUpdateMetadataInstanceParams,
    options?: RequestOptions,
  ): APIPromise<MetadataAPI.MetadataFull> {
    const { folder_id, scope, body } = params;
    return this._client.put(path`/folders/${folder_id}/metadata/${scope}/${templateKey}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/json-patch+json' }, options?.headers]),
    });
  }
}

export interface MetadataCreateMetadataInstanceParams {
  /**
   * Path param: The unique identifier that represent a folder.
   *
   * The ID for any folder can be determined by visiting this folder in the web
   * application and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/folder/123` the `folder_id` is `123`.
   *
   * The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id: string;

  /**
   * Path param: The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';

  /**
   * Body param:
   */
  body?: { [key: string]: MetadataCreateMetadataInstanceParams.Body };
}

export namespace MetadataCreateMetadataInstanceParams {
  /**
   * A value for each of the fields that are present on the metadata template. For
   * the `global.properties` template this can be a list of zero or more fields, as
   * this template allows for any generic key-value pairs to be stored in the
   * template.
   */
  export interface Body {}
}

export interface MetadataGetMetadataInstanceParams {
  /**
   * The unique identifier that represent a folder.
   *
   * The ID for any folder can be determined by visiting this folder in the web
   * application and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/folder/123` the `folder_id` is `123`.
   *
   * The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id: string;

  /**
   * The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';
}

export interface MetadataRemoveMetadataInstanceParams {
  /**
   * The unique identifier that represent a folder.
   *
   * The ID for any folder can be determined by visiting this folder in the web
   * application and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/folder/123` the `folder_id` is `123`.
   *
   * The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id: string;

  /**
   * The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';
}

export interface MetadataUpdateMetadataInstanceParams {
  /**
   * Path param: The unique identifier that represent a folder.
   *
   * The ID for any folder can be determined by visiting this folder in the web
   * application and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/folder/123` the `folder_id` is `123`.
   *
   * The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id: string;

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
  body?: Array<MetadataUpdateMetadataInstanceParams.Body>;
}

export namespace MetadataUpdateMetadataInstanceParams {
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

Metadata.Enterprise = Enterprise;

export declare namespace Metadata {
  export {
    type MetadataCreateMetadataInstanceParams as MetadataCreateMetadataInstanceParams,
    type MetadataGetMetadataInstanceParams as MetadataGetMetadataInstanceParams,
    type MetadataRemoveMetadataInstanceParams as MetadataRemoveMetadataInstanceParams,
    type MetadataUpdateMetadataInstanceParams as MetadataUpdateMetadataInstanceParams,
  };

  export { Enterprise as Enterprise };
}
