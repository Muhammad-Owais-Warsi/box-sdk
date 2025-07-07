// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RetentionPoliciesAPI from '../retention-policies';
import * as FilesAPI from '../files/files';
import * as FoldersAPI from './folders';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trash extends APIResource {
  /**
   * Retrieves a folder that has been moved to the trash.
   *
   * Please note that only if the folder itself has been moved to the trash can it be
   * retrieved with this API call. If instead one of its parent folders was moved to
   * the trash, only that folder can be inspected using the
   * [`GET /folders/:id/trash`](e://get_folders_id_trash) API.
   *
   * To list all items that have been moved to the trash, please use the
   * [`GET /folders/trash/items`](e://get-folders-trash-items/) API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.folders.trash.getTrashedFolder('12345');
   * ```
   */
  getTrashedFolder(
    folderID: string,
    query: TrashGetTrashedFolderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrashGetTrashedFolderResponse> {
    return this._client.get(path`/folders/${folderID}/trash`, { query, ...options });
  }

  /**
   * Retrieves the files and folders that have been moved to the trash.
   *
   * Any attribute in the full files or folders objects can be passed in with the
   * `fields` parameter to retrieve those specific attributes that are not returned
   * by default.
   *
   * This endpoint defaults to use offset-based pagination, yet also supports
   * marker-based pagination using the `marker` parameter.
   *
   * @example
   * ```ts
   * const items = await client.folders.trash.listTrashedItems();
   * ```
   */
  listTrashedItems(
    query: TrashListTrashedItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FoldersAPI.Items> {
    return this._client.get('/folders/trash/items', { query, ...options });
  }

  /**
   * Permanently deletes a folder that is in the trash. This action cannot be undone.
   *
   * @example
   * ```ts
   * await client.folders.trash.permanentlyRemove('12345');
   * ```
   */
  permanentlyRemove(folderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/folders/${folderID}/trash`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Represents a trashed folder.
 */
export interface TrashGetTrashedFolderResponse {
  /**
   * The unique identifier that represent a folder.
   *
   * The ID for any folder can be determined by visiting a folder in the web
   * application and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/folders/123` the `folder_id` is `123`.
   */
  id: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by: TrashGetTrashedFolderResponse.CreatedBy;

  /**
   * The optional description of this folder.
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
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  modified_by: TrashGetTrashedFolderResponse.ModifiedBy;

  /**
   * The name of the folder.
   */
  name: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  owned_by: TrashGetTrashedFolderResponse.OwnedBy;

  /**
   * The tree of folders that this file is contained in, starting at the root.
   */
  path_collection: TrashGetTrashedFolderResponse.PathCollection;

  /**
   * The folder size in bytes.
   *
   * Be careful parsing this integer as its value can get very large.
   */
  size: number;

  /**
   * The value will always be `folder`.
   */
  type: 'folder';

  /**
   * The date and time at which this folder was originally created.
   */
  content_created_at?: string | null;

  /**
   * The date and time at which this folder was last updated.
   */
  content_modified_at?: string | null;

  /**
   * The date and time when the folder was created. This value may be `null` for some
   * folders such as the root folder or the trash folder.
   */
  created_at?: string | null;

  /**
   * The HTTP `etag` of this folder. This can be used within some API endpoints in
   * the `If-Match` and `If-None-Match` headers to only perform changes on the folder
   * if (no) changes have happened.
   */
  etag?: string | null;

  /**
   * The folder upload email for this folder. This will be `null` if a folder has
   * been trashed, since the upload will no longer work.
   */
  folder_upload_email?: string | null;

  /**
   * The date and time when the folder was last updated. This value may be `null` for
   * some folders such as the root folder or the trash folder.
   */
  modified_at?: string | null;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent?: TrashGetTrashedFolderResponse.Parent;

  /**
   * The time at which this folder is expected to be purged from the trash.
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
   * The shared link for this folder. This will be `null` if a folder has been
   * trashed, since the link will no longer be active.
   */
  shared_link?: string | null;

  /**
   * The time at which this folder was put in the trash.
   */
  trashed_at?: string | null;
}

export namespace TrashGetTrashedFolderResponse {
  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface CreatedBy extends RetentionPoliciesAPI.UserMini {}

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

export interface TrashGetTrashedFolderParams {
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

export interface TrashListTrashedItemsParams {
  /**
   * The direction to sort results in. This can be either in alphabetical ascending
   * (`ASC`) or descending (`DESC`) order.
   */
  direction?: 'ASC' | 'DESC';

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

  /**
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value exceeding 10000 will be rejected with a 400
   * response.
   */
  offset?: number;

  /**
   * Defines the **second** attribute by which items are sorted.
   *
   * Items are always sorted by their `type` first, with folders listed before files,
   * and files listed before web links.
   *
   * This parameter is not supported when using marker-based pagination.
   */
  sort?: 'name' | 'date' | 'size';

  /**
   * Specifies whether to use marker-based pagination instead of offset-based
   * pagination. Only one pagination method can be used at a time.
   *
   * By setting this value to true, the API will return a `marker` field that can be
   * passed as a parameter to this endpoint to get the next page of the response.
   */
  usemarker?: boolean;
}

export declare namespace Trash {
  export {
    type TrashGetTrashedFolderResponse as TrashGetTrashedFolderResponse,
    type TrashGetTrashedFolderParams as TrashGetTrashedFolderParams,
    type TrashListTrashedItemsParams as TrashListTrashedItemsParams,
  };
}
