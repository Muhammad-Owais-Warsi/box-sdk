// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RetentionPoliciesAPI from '../retention-policies';
import * as FilesAPI from './files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * Retrieve a specific version of a file.
   *
   * Versions are only tracked for Box users with premium accounts.
   *
   * @example
   * ```ts
   * const fileVersionFull =
   *   await client.files.versions.retrieve('1234', {
   *     file_id: '12345',
   *   });
   * ```
   */
  retrieve(
    fileVersionID: string,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FileVersionFull> {
    const { file_id, ...query } = params;
    return this._client.get(path`/files/${file_id}/versions/${fileVersionID}`, { query, ...options });
  }

  /**
   * Retrieve a list of the past versions for a file.
   *
   * Versions are only tracked by Box users with premium accounts. To fetch the ID of
   * the current version of a file, use the `GET /file/:id` API.
   *
   * @example
   * ```ts
   * const versions = await client.files.versions.list('12345');
   * ```
   */
  list(
    fileID: string,
    query: VersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VersionListResponse> {
    return this._client.get(path`/files/${fileID}/versions`, { query, ...options });
  }

  /**
   * Move a file version to the trash.
   *
   * Versions are only tracked for Box users with premium accounts.
   *
   * @example
   * ```ts
   * await client.files.versions.delete('1234', {
   *   file_id: '12345',
   * });
   * ```
   */
  delete(fileVersionID: string, params: VersionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { file_id, 'if-match': ifMatch } = params;
    return this._client.delete(path`/files/${file_id}/versions/${fileVersionID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Promote a specific version of a file.
   *
   * If previous versions exist, this method can be used to promote one of the older
   * versions to the top of the version history.
   *
   * This creates a new copy of the old version and puts it at the top of the
   * versions history. The file will have the exact same contents as the older
   * version, with the the same hash digest, `etag`, and name as the original.
   *
   * Other properties such as comments do not get updated to their former values.
   *
   * Don't use this endpoint to restore Box Notes, as it works with file formats such
   * as PDF, DOC, PPTX or similar.
   *
   * @example
   * ```ts
   * const fileVersionFull = await client.files.versions.promote(
   *   '12345',
   * );
   * ```
   */
  promote(
    fileID: string,
    params: VersionPromoteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileVersionFull> {
    const { fields, ...body } = params ?? {};
    return this._client.post(path`/files/${fileID}/versions/current`, {
      query: { fields },
      body,
      ...options,
    });
  }

  /**
   * Restores a specific version of a file after it was deleted. Don't use this
   * endpoint to restore Box Notes, as it works with file formats such as PDF, DOC,
   * PPTX or similar.
   *
   * @example
   * ```ts
   * const fileVersionFull = await client.files.versions.restore(
   *   '1234',
   *   { file_id: '12345' },
   * );
   * ```
   */
  restore(
    fileVersionID: string,
    params: VersionRestoreParams,
    options?: RequestOptions,
  ): APIPromise<FileVersionFull> {
    const { file_id, ...body } = params;
    return this._client.put(path`/files/${file_id}/versions/${fileVersionID}`, { body, ...options });
  }
}

/**
 * A standard representation of a file version.
 */
export interface FileVersion extends FilesAPI.FileVersionMini {
  /**
   * When the file version object was created.
   */
  created_at?: string;

  /**
   * When the file version object was last updated.
   */
  modified_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  modified_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The name of the file version.
   */
  name?: string;

  /**
   * When the file version object will be permanently deleted.
   */
  purged_at?: string | null;

  /**
   * When the file version was restored from the trash.
   */
  restored_at?: string | null;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  restored_by?: RetentionPoliciesAPI.UserMini;

  /**
   * Size of the file version in bytes.
   */
  size?: number;

  /**
   * When the file version object was trashed.
   */
  trashed_at?: string | null;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  trashed_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The display name of the user that uploaded the file. In most cases this is the
   * name of the user logged in at the time of the upload.
   *
   * If the file was uploaded using a File Request form that requires the user to
   * provide an email address, this field is populated with that email address. If an
   * email address was not required in the File Request form, this field is set to
   * return a value of `File Request`.
   *
   * In all other anonymous cases where no email was provided this field will default
   * to a value of `Someone`.
   */
  uploader_display_name?: string;
}

/**
 * A full representation of a file version, as can be returned from any file
 * version API endpoints by default.
 */
export interface FileVersionFull extends FileVersion {
  /**
   * The version number of this file version.
   */
  version_number?: string;
}

export interface VersionListResponse {
  /**
   * A list of file versions.
   */
  entries?: Array<FileVersionFull>;

  /**
   * The limit that was used for these entries. This will be the same as the `limit`
   * query parameter unless that value exceeded the maximum value allowed. The
   * maximum value varies by API.
   */
  limit?: number;

  /**
   * The 0-based offset of the first entry in this set. This will be the same as the
   * `offset` query parameter.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  offset?: number;

  /**
   * The order by which items are returned.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  order?: Array<VersionListResponse.Order>;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

export namespace VersionListResponse {
  /**
   * The order in which a pagination is ordered.
   */
  export interface Order {
    /**
     * The field to order by.
     */
    by?: string;

    /**
     * The direction to order by, either ascending or descending.
     */
    direction?: 'ASC' | 'DESC';
  }
}

export interface VersionRetrieveParams {
  /**
   * Path param: The unique identifier that represents a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id: string;

  /**
   * Query param: A comma-separated list of attributes to include in the response.
   * This can be used to request fields that are not normally returned in a standard
   * response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;
}

export interface VersionListParams {
  /**
   * A comma-separated list of attributes to include in the response. This can be
   * used to request fields that are not normally returned in a standard response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;

  /**
   * The maximum number of items to return per page.
   */
  limit?: number;

  /**
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value exceeding 10000 will be rejected with a 400
   * response.
   */
  offset?: number;
}

export interface VersionDeleteParams {
  /**
   * Path param: The unique identifier that represents a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id: string;

  /**
   * Header param: Ensures this item hasn't recently changed before making changes.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `412 Precondition Failed` if it has changed since.
   */
  'if-match'?: string;
}

export interface VersionPromoteParams {
  /**
   * Query param: A comma-separated list of attributes to include in the response.
   * This can be used to request fields that are not normally returned in a standard
   * response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;

  /**
   * Body param: The file version ID.
   */
  id?: string;

  /**
   * Body param: The type to promote.
   */
  type?: 'file_version';
}

export interface VersionRestoreParams {
  /**
   * Path param: The unique identifier that represents a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id: string;

  /**
   * Body param: Set this to `null` to clear the date and restore the file.
   */
  trashed_at?: string | null;
}

export declare namespace Versions {
  export {
    type FileVersion as FileVersion,
    type FileVersionFull as FileVersionFull,
    type VersionListResponse as VersionListResponse,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionPromoteParams as VersionPromoteParams,
    type VersionRestoreParams as VersionRestoreParams,
  };
}
