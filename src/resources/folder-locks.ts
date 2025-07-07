// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as FilesAPI from './files/files';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FolderLocks extends APIResource {
  /**
   * Creates a folder lock on a folder, preventing it from being moved and/or
   * deleted.
   *
   * You must be authenticated as the owner or co-owner of the folder to use this
   * endpoint.
   *
   * @example
   * ```ts
   * const folderLock = await client.folderLocks.create({
   *   folder: { id: '1234567890', type: 'folder' },
   * });
   * ```
   */
  create(body: FolderLockCreateParams, options?: RequestOptions): APIPromise<FolderLock> {
    return this._client.post('/folder_locks', { body, ...options });
  }

  /**
   * Retrieves folder lock details for a given folder.
   *
   * You must be authenticated as the owner or co-owner of the folder to use this
   * endpoint.
   *
   * @example
   * ```ts
   * const folderLocks = await client.folderLocks.list({
   *   folder_id: 'folder_id',
   * });
   * ```
   */
  list(query: FolderLockListParams, options?: RequestOptions): APIPromise<FolderLockListResponse> {
    return this._client.get('/folder_locks', { query, ...options });
  }

  /**
   * Deletes a folder lock on a given folder.
   *
   * You must be authenticated as the owner or co-owner of the folder to use this
   * endpoint.
   *
   * @example
   * ```ts
   * await client.folderLocks.delete('12345');
   * ```
   */
  delete(folderLockID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/folder_locks/${folderLockID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Folder locks define access restrictions placed by folder owners to prevent
 * specific folders from being moved or deleted.
 */
export interface FolderLock {
  /**
   * The unique identifier for this folder lock.
   */
  id?: string;

  /**
   * When the folder lock object was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  created_by?: RetentionPoliciesAPI.UserBase;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  folder?: FilesAPI.FolderMini;

  /**
   * The lock type, always `freeze`.
   */
  lock_type?: string;

  /**
   * The operations that have been locked. Currently the `move` and `delete`
   * operations cannot be locked separately, and both need to be set to `true`.
   */
  locked_operations?: FolderLock.LockedOperations;

  /**
   * The object type, always `folder_lock`.
   */
  type?: string;
}

export namespace FolderLock {
  /**
   * The operations that have been locked. Currently the `move` and `delete`
   * operations cannot be locked separately, and both need to be set to `true`.
   */
  export interface LockedOperations {
    /**
     * Whether deleting the folder is restricted.
     */
    delete: boolean;

    /**
     * Whether moving the folder is restricted.
     */
    move: boolean;
  }
}

/**
 * A list of folder locks.
 */
export interface FolderLockListResponse {
  /**
   * A list of folder locks.
   */
  entries?: Array<FolderLock>;

  /**
   * The limit that was used for these entries. This will be the same as the `limit`
   * query parameter unless that value exceeded the maximum value allowed. The
   * maximum value varies by API.
   */
  limit?: string;

  /**
   * The marker for the start of the next page of results.
   */
  next_marker?: string | null;
}

export interface FolderLockCreateParams {
  /**
   * The folder to apply the lock to.
   */
  folder: FolderLockCreateParams.Folder;

  /**
   * The operations to lock for the folder. If `locked_operations` is included in the
   * request, both `move` and `delete` must also be included and both set to `true`.
   */
  locked_operations?: FolderLockCreateParams.LockedOperations;
}

export namespace FolderLockCreateParams {
  /**
   * The folder to apply the lock to.
   */
  export interface Folder {
    /**
     * The ID of the folder.
     */
    id: string;

    /**
     * The content type the lock is being applied to. Only `folder` is supported.
     */
    type: string;
  }

  /**
   * The operations to lock for the folder. If `locked_operations` is included in the
   * request, both `move` and `delete` must also be included and both set to `true`.
   */
  export interface LockedOperations {
    /**
     * Whether deleting the folder should be locked.
     */
    delete: boolean;

    /**
     * Whether moving the folder should be locked.
     */
    move: boolean;
  }
}

export interface FolderLockListParams {
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
}

export declare namespace FolderLocks {
  export {
    type FolderLock as FolderLock,
    type FolderLockListResponse as FolderLockListResponse,
    type FolderLockCreateParams as FolderLockCreateParams,
    type FolderLockListParams as FolderLockListParams,
  };
}
