// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FilesAPI from './files/files';
import * as FoldersAPI from './folders/folders';
import * as WebLinksAPI from './web-links/web-links';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class RecentItems extends APIResource {
  /**
   * Returns information about the recent items accessed by a user, either in the
   * last 90 days or up to the last 1000 items accessed.
   */
  list(
    query: RecentItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecentItemListResponse> {
    return this._client.get('/recent_items', { query, ...options });
  }
}

export interface RecentItemListResponse {
  /**
   * A list of recent items.
   */
  entries?: Array<RecentItemListResponse.Entry>;

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

export namespace RecentItemListResponse {
  /**
   * A recent item accessed by a user.
   */
  export interface Entry {
    /**
     * The time of the most recent interaction.
     */
    interacted_at?: string;

    /**
     * If the item was accessed through a shared link it will appear here, otherwise
     * this will be null.
     */
    interaction_shared_link?: string;

    /**
     * The most recent type of access the user performed on the item.
     */
    interaction_type?: 'item_preview' | 'item_upload' | 'item_comment' | 'item_open' | 'item_modify';

    /**
     * The item that was recently accessed.
     */
    item?: FilesAPI.FileFull | FoldersAPI.FolderFull | WebLinksAPI.WebLink;

    /**
     * The value will always be `recent_item`.
     */
    type?: string;
  }
}

export interface RecentItemListParams {
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

export declare namespace RecentItems {
  export {
    type RecentItemListResponse as RecentItemListResponse,
    type RecentItemListParams as RecentItemListParams,
  };
}
