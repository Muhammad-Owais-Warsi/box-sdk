// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RetentionPoliciesAPI from '../retention-policies';
import * as FilesAPI from '../files/files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trash extends APIResource {
  /**
   * Retrieves a web link that has been moved to the trash.
   *
   * @example
   * ```ts
   * const trash = await client.webLinks.trash.retrieve('12345');
   * ```
   */
  retrieve(
    webLinkID: string,
    query: TrashRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrashRetrieveResponse> {
    return this._client.get(path`/web_links/${webLinkID}/trash`, { query, ...options });
  }

  /**
   * Permanently deletes a web link that is in the trash. This action cannot be
   * undone.
   *
   * @example
   * ```ts
   * await client.webLinks.trash.permanentlyDelete('12345');
   * ```
   */
  permanentlyDelete(webLinkID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/web_links/${webLinkID}/trash`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Represents a trashed web link.
 */
export interface TrashRetrieveResponse {
  /**
   * The unique identifier for this web link.
   */
  id?: string;

  /**
   * When this file was created on Box’s servers.
   */
  created_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The description accompanying the web link. This is visible within the Box web
   * application.
   */
  description?: string;

  /**
   * The entity tag of this web link. Used with `If-Match` headers.
   */
  etag?: string;

  /**
   * Whether this item is deleted or not. Values include `active`, `trashed` if the
   * file has been moved to the trash, and `deleted` if the file has been permanently
   * deleted.
   */
  item_status?: 'active' | 'trashed' | 'deleted';

  /**
   * When this file was last updated on the Box servers.
   */
  modified_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  modified_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The name of the web link.
   */
  name?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  owned_by?: RetentionPoliciesAPI.UserMini;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent?: FilesAPI.FolderMini;

  /**
   * The tree of folders that this web link is contained in, starting at the root.
   */
  path_collection?: TrashRetrieveResponse.PathCollection;

  /**
   * When this file will be permanently deleted.
   */
  purged_at?: string | null;

  /**
   * A numeric identifier that represents the most recent user event that has been
   * applied to this item.
   *
   * This can be used in combination with the `GET /events`-endpoint to filter out
   * user events that would have occurred before this identifier was read.
   *
   * An example would be where a Box Drive-like application would fetch an item via
   * the API, and then listen to incoming user events for changes to the item. The
   * application would ignore any user events where the `sequence_id` in the event is
   * smaller than or equal to the `sequence_id` in the originally fetched resource.
   */
  sequence_id?: string | null;

  /**
   * The shared link for this bookmark. This will be `null` if a bookmark has been
   * trashed, since the link will no longer be active.
   */
  shared_link?: string | null;

  /**
   * When this file was last moved to the trash.
   */
  trashed_at?: string | null;

  /**
   * The value will always be `web_link`.
   */
  type?: 'web_link';

  /**
   * The URL this web link points to.
   */
  url?: string;
}

export namespace TrashRetrieveResponse {
  /**
   * The tree of folders that this web link is contained in, starting at the root.
   */
  export interface PathCollection {}
}

export interface TrashRetrieveParams {
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
}

export declare namespace Trash {
  export {
    type TrashRetrieveResponse as TrashRetrieveResponse,
    type TrashRetrieveParams as TrashRetrieveParams,
  };
}
