// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class StoragePolicies extends APIResource {
  /**
   * Fetches a specific storage policy.
   *
   * @example
   * ```ts
   * const storagePolicy = await client.storagePolicies.retrieve(
   *   '34342',
   * );
   * ```
   */
  retrieve(storagePolicyID: string, options?: RequestOptions): APIPromise<StoragePolicy> {
    return this._client.get(path`/storage_policies/${storagePolicyID}`, options);
  }

  /**
   * Fetches all the storage policies in the enterprise.
   *
   * @example
   * ```ts
   * const storagePolicies = await client.storagePolicies.list();
   * ```
   */
  list(
    query: StoragePolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoragePolicyListResponse> {
    return this._client.get('/storage_policies', { query, ...options });
  }
}

/**
 * The Storage Policy object describes the storage zone.
 */
export interface StoragePolicy extends StoragePolicyMini {
  /**
   * A descriptive name of the region.
   */
  name?: string;
}

/**
 * A mini description of a Storage Policy object.
 */
export interface StoragePolicyMini {
  /**
   * The unique identifier for this storage policy.
   */
  id: string;

  /**
   * The value will always be `storage_policy`.
   */
  type: 'storage_policy';
}

export interface StoragePolicyListResponse {
  /**
   * A list of storage policies.
   */
  entries?: Array<StoragePolicy>;

  /**
   * The limit that was used for these entries. This will be the same as the `limit`
   * query parameter unless that value exceeded the maximum value allowed. The
   * maximum value varies by API.
   */
  limit?: number;

  /**
   * The marker for the start of the next page of results.
   */
  next_marker?: string | null;

  /**
   * The marker for the start of the previous page of results.
   */
  prev_marker?: string | null;
}

export interface StoragePolicyListParams {
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
   * Defines the position marker at which to begin returning results. This is used
   * when paginating using marker-based pagination.
   *
   * This requires `usemarker` to be set to `true`.
   */
  marker?: string;
}

export declare namespace StoragePolicies {
  export {
    type StoragePolicy as StoragePolicy,
    type StoragePolicyMini as StoragePolicyMini,
    type StoragePolicyListResponse as StoragePolicyListResponse,
    type StoragePolicyListParams as StoragePolicyListParams,
  };
}
