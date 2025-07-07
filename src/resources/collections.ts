// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FilesAPI from './files/files';
import * as WebLinksAPI from './web-links/web-links';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Collections extends APIResource {
  /**
   * Retrieves a collection by its ID.
   *
   * @example
   * ```ts
   * const collection = await client.collections.retrieve(
   *   '926489',
   * );
   * ```
   */
  retrieve(collectionID: string, options?: RequestOptions): APIPromise<Collection> {
    return this._client.get(path`/collections/${collectionID}`, options);
  }

  /**
   * Retrieves all collections for a given user.
   *
   * Currently, only the `favorites` collection is supported.
   *
   * @example
   * ```ts
   * const collections = await client.collections.list();
   * ```
   */
  list(
    query: CollectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionListResponse> {
    return this._client.get('/collections', { query, ...options });
  }

  /**
   * Retrieves the files and/or folders contained within this collection.
   *
   * @example
   * ```ts
   * const response = await client.collections.listItems(
   *   '926489',
   * );
   * ```
   */
  listItems(
    collectionID: string,
    query: CollectionListItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionListItemsResponse> {
    return this._client.get(path`/collections/${collectionID}/items`, { query, ...options });
  }
}

/**
 * A collection of items, including files and folders.
 *
 * Currently, the only collection available is the `favorites` collection.
 *
 * The contents of a collection can be explored in a similar way to which the
 * contents of a folder is explored.
 */
export interface Collection {
  /**
   * The unique identifier for this collection.
   */
  id?: string;

  /**
   * The type of the collection. This is used to determine the proper visual
   * treatment for collections.
   */
  collection_type?: 'favorites';

  /**
   * The name of the collection.
   */
  name?: 'Favorites';

  /**
   * The value will always be `collection`.
   */
  type?: 'collection';
}

export interface CollectionListResponse {
  /**
   * A list of collections.
   */
  entries?: Array<Collection>;

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
  order?: Array<CollectionListResponse.Order>;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

export namespace CollectionListResponse {
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

export interface CollectionListItemsResponse {
  /**
   * The items in this collection.
   */
  entries?: Array<FilesAPI.FileFull | FilesAPI.FolderMini | WebLinksAPI.WebLink>;

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
  order?: Array<CollectionListItemsResponse.Order>;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

export namespace CollectionListItemsResponse {
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

export interface CollectionListParams {
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

export interface CollectionListItemsParams {
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

export declare namespace Collections {
  export {
    type Collection as Collection,
    type CollectionListResponse as CollectionListResponse,
    type CollectionListItemsResponse as CollectionListItemsResponse,
    type CollectionListParams as CollectionListParams,
    type CollectionListItemsParams as CollectionListItemsParams,
  };
}
