// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RetentionPoliciesAPI from '../retention-policies';
import * as FilesAPI from './files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trash extends APIResource {
  /**
   * Retrieves a file that has been moved to the trash.
   *
   * Please note that only if the file itself has been moved to the trash can it be
   * retrieved with this API call. If instead one of its parent folders was moved to
   * the trash, only that folder can be inspected using the
   * [`GET /folders/:id/trash`](e://get_folders_id_trash) API.
   *
   * To list all items that have been moved to the trash, please use the
   * [`GET /folders/trash/items`](e://get-folders-trash-items/) API.
   *
   * @example
   * ```ts
   * const trash = await client.files.trash.retrieve('12345');
   * ```
   */
  retrieve(
    fileID: string,
    query: TrashRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrashRetrieveResponse> {
    return this._client.get(path`/files/${fileID}/trash`, { query, ...options });
  }

  /**
   * Permanently deletes a file that is in the trash. This action cannot be undone.
   *
   * @example
   * ```ts
   * await client.files.trash.delete('12345');
   * ```
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/${fileID}/trash`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Represents a trashed file.
 */
export interface TrashRetrieveResponse {
  /**
   * The unique identifier that represent a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  id: string;

  /**
   * The date and time when the file was created on Box.
   */
  created_at: string;

  /**
   * The optional description of this file.
   */
  description: string;

  /**
   * Defines if this item has been deleted or not.
   *
   * - `active` when the item has is not in the trash
   * - `trashed` when the item has been moved to the trash but not deleted
   * - `deleted` when the item has been permanently deleted.
   */
  item_status: 'active' | 'trashed' | 'deleted';

  /**
   * The date and time when the file was last updated on Box.
   */
  modified_at: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  modified_by: TrashRetrieveResponse.ModifiedBy;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  owned_by: TrashRetrieveResponse.OwnedBy;

  /**
   * The tree of folders that this file is contained in, starting at the root.
   */
  path_collection: TrashRetrieveResponse.PathCollection;

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
  sequence_id: string | null;

  /**
   * The SHA1 hash of the file. This can be used to compare the contents of a file on
   * Box with a local file.
   */
  sha1: string;

  /**
   * The file size in bytes. Be careful parsing this integer as it can get very large
   * and cause an integer overflow.
   */
  size: number;

  /**
   * The value will always be `file`.
   */
  type: 'file';

  /**
   * The date and time at which this file was originally created, which might be
   * before it was uploaded to Box.
   */
  content_created_at?: string | null;

  /**
   * The date and time at which this file was last updated, which might be before it
   * was uploaded to Box.
   */
  content_modified_at?: string | null;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The HTTP `etag` of this file. This can be used within some API endpoints in the
   * `If-Match` and `If-None-Match` headers to only perform changes on the file if
   * (no) changes have happened.
   */
  etag?: string | null;

  /**
   * A mini representation of a file version, used when nested within another
   * resource.
   */
  file_version?: FilesAPI.FileVersionMini;

  /**
   * The name of the file.
   */
  name?: string;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent?: TrashRetrieveResponse.Parent;

  /**
   * The time at which this file is expected to be purged from the trash.
   */
  purged_at?: string | null;

  /**
   * The shared link for this file. This will be `null` if a file has been trashed,
   * since the link will no longer be active.
   */
  shared_link?: string | null;

  /**
   * The time at which this file was put in the trash.
   */
  trashed_at?: string | null;
}

export namespace TrashRetrieveResponse {
  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface ModifiedBy extends RetentionPoliciesAPI.UserMini {}

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface OwnedBy extends RetentionPoliciesAPI.UserMini {}

  /**
   * The tree of folders that this file is contained in, starting at the root.
   */
  export interface PathCollection {}

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  export interface Parent extends FilesAPI.FolderMini {}
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
