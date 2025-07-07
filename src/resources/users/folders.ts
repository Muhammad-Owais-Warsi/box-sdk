// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FoldersAPI from '../folders/folders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Move all of the items (files, folders and workflows) owned by a user into
   * another user's account
   *
   * Only the root folder (`0`) can be transferred.
   *
   * Folders can only be moved across users by users with administrative permissions.
   *
   * All existing shared links and folder-level collaborations are transferred during
   * the operation. Please note that while collaborations at the individual
   * file-level are transferred during the operation, the collaborations are deleted
   * when the original user is deleted.
   *
   * If the user has a large number of items across all folders, the call will be run
   * asynchronously. If the operation is not completed within 10 minutes, the user
   * will receive a 200 OK response, and the operation will continue running.
   *
   * If the destination path has a metadata cascade policy attached to any of the
   * parent folders, a metadata cascade operation will be kicked off asynchronously.
   *
   * There is currently no way to check for when this operation is finished.
   *
   * The destination folder's name will be in the format
   * `{User}'s Files and Folders`, where `{User}` is the display name of the user.
   *
   * To make this API call your application will need to have the "Read and write all
   * files and folders stored in Box" scope enabled.
   *
   * Please make sure the destination user has access to `Relay` or `Relay Lite`, and
   * has access to the files and folders involved in the workflows being transferred.
   *
   * Admins will receive an email when the operation is completed.
   *
   * @example
   * ```ts
   * const folderFull = await client.users.folders.transfer(
   *   '12345',
   *   { owned_by: { id: '1232234' } },
   * );
   * ```
   */
  transfer(
    userID: string,
    params: FolderTransferParams,
    options?: RequestOptions,
  ): APIPromise<FoldersAPI.FolderFull> {
    const { fields, notify, ...body } = params;
    return this._client.put(path`/users/${userID}/folders/0`, {
      query: { fields, notify },
      body,
      ...options,
    });
  }
}

export interface FolderTransferParams {
  /**
   * Body param: The user who the folder will be transferred to.
   */
  owned_by: FolderTransferParams.OwnedBy;

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
   * Query param: Determines if users should receive email notification for the
   * action performed.
   */
  notify?: boolean;
}

export namespace FolderTransferParams {
  /**
   * The user who the folder will be transferred to.
   */
  export interface OwnedBy {
    /**
     * The ID of the user who the folder will be transferred to.
     */
    id: string;
  }
}

export declare namespace Folders {
  export { type FolderTransferParams as FolderTransferParams };
}
