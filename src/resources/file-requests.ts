// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as FilesAPI from './files/files';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FileRequests extends APIResource {
  /**
   * Retrieves the information about a file request.
   *
   * @example
   * ```ts
   * const fileRequest = await client.fileRequests.retrieve(
   *   '123',
   * );
   * ```
   */
  retrieve(fileRequestID: string, options?: RequestOptions): APIPromise<FileRequest> {
    return this._client.get(path`/file_requests/${fileRequestID}`, options);
  }

  /**
   * Updates a file request. This can be used to activate or deactivate a file
   * request.
   *
   * @example
   * ```ts
   * const fileRequest = await client.fileRequests.update('123');
   * ```
   */
  update(
    fileRequestID: string,
    params: FileRequestUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileRequest> {
    const { 'if-match': ifMatch, ...body } = params ?? {};
    return this._client.put(path`/file_requests/${fileRequestID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Deletes a file request permanently.
   *
   * @example
   * ```ts
   * await client.fileRequests.delete('123');
   * ```
   */
  delete(fileRequestID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/file_requests/${fileRequestID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Copies an existing file request that is already present on one folder, and
   * applies it to another folder.
   *
   * @example
   * ```ts
   * const fileRequest = await client.fileRequests.copy('123');
   * ```
   */
  copy(
    fileRequestID: string,
    body: FileRequestCopyParams,
    options?: RequestOptions,
  ): APIPromise<FileRequest> {
    return this._client.post(path`/file_requests/${fileRequestID}/copy`, { body, ...options });
  }
}

/**
 * A standard representation of a file request, as returned from any file request
 * API endpoints by default.
 */
export interface FileRequest {
  /**
   * The unique identifier for this file request.
   */
  id: string;

  /**
   * The date and time when the file request was created.
   */
  created_at: string;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  folder: FilesAPI.FolderMini;

  /**
   * The value will always be `file_request`.
   */
  type: 'file_request';

  /**
   * The date and time when the file request was last updated.
   */
  updated_at: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The optional description of this file request. This is shown in the Box UI to
   * users uploading files.
   *
   * This defaults to description of the file request that was copied to create this
   * file request.
   */
  description?: string | null;

  /**
   * The HTTP `etag` of this file. This can be used in combination with the
   * `If-Match` header when updating a file request. By providing that header, a
   * change will only be performed on the file request if the `etag` on the file
   * request still matches the `etag` provided in the `If-Match` header.
   */
  etag?: string | null;

  /**
   * The date after which a file request will no longer accept new submissions.
   *
   * After this date, the `status` will automatically be set to `inactive`.
   */
  expires_at?: string;

  /**
   * Whether a file request submitter is required to provide a description of the
   * files they are submitting.
   *
   * When this setting is set to true, the Box UI will show a description field on
   * the file request form.
   *
   * This defaults to setting of file request that was copied to create this file
   * request.
   */
  is_description_required?: boolean;

  /**
   * Whether a file request submitter is required to provide their email address.
   *
   * When this setting is set to true, the Box UI will show an email field on the
   * file request form.
   *
   * This defaults to setting of file request that was copied to create this file
   * request.
   */
  is_email_required?: boolean;

  /**
   * The status of the file request. This defaults to `active`.
   *
   * When the status is set to `inactive`, the file request will no longer accept new
   * submissions, and any visitor to the file request URL will receive a `HTTP 404`
   * status code.
   *
   * This defaults to status of file request that was copied to create this file
   * request.
   */
  status?: 'active' | 'inactive';

  /**
   * The title of file request. This is shown in the Box UI to users uploading files.
   *
   * This defaults to title of the file request that was copied to create this file
   * request.
   */
  title?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  updated_by?: FileRequest.UpdatedBy;

  /**
   * The generated URL for this file request. This URL can be shared with users to
   * let them upload files to the associated folder.
   */
  url?: string;
}

export namespace FileRequest {
  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface UpdatedBy extends RetentionPoliciesAPI.UserMini {}
}

/**
 * The request body to update a file request.
 */
export interface FileRequestUpdate {
  /**
   * An optional new description for the file request. This can be used to change the
   * description of the file request.
   *
   * This will default to the value on the existing file request.
   */
  description?: string;

  /**
   * The date after which a file request will no longer accept new submissions.
   *
   * After this date, the `status` will automatically be set to `inactive`.
   *
   * This will default to the value on the existing file request.
   */
  expires_at?: string;

  /**
   * Whether a file request submitter is required to provide a description of the
   * files they are submitting.
   *
   * When this setting is set to true, the Box UI will show a description field on
   * the file request form.
   *
   * This will default to the value on the existing file request.
   */
  is_description_required?: boolean;

  /**
   * Whether a file request submitter is required to provide their email address.
   *
   * When this setting is set to true, the Box UI will show an email field on the
   * file request form.
   *
   * This will default to the value on the existing file request.
   */
  is_email_required?: boolean;

  /**
   * An optional new status of the file request.
   *
   * When the status is set to `inactive`, the file request will no longer accept new
   * submissions, and any visitor to the file request URL will receive a `HTTP 404`
   * status code.
   *
   * This will default to the value on the existing file request.
   */
  status?: 'active' | 'inactive';

  /**
   * An optional new title for the file request. This can be used to change the title
   * of the file request.
   *
   * This will default to the value on the existing file request.
   */
  title?: string;
}

export interface FileRequestUpdateParams {
  /**
   * Body param: An optional new description for the file request. This can be used
   * to change the description of the file request.
   *
   * This will default to the value on the existing file request.
   */
  description?: string;

  /**
   * Body param: The date after which a file request will no longer accept new
   * submissions.
   *
   * After this date, the `status` will automatically be set to `inactive`.
   *
   * This will default to the value on the existing file request.
   */
  expires_at?: string;

  /**
   * Body param: Whether a file request submitter is required to provide a
   * description of the files they are submitting.
   *
   * When this setting is set to true, the Box UI will show a description field on
   * the file request form.
   *
   * This will default to the value on the existing file request.
   */
  is_description_required?: boolean;

  /**
   * Body param: Whether a file request submitter is required to provide their email
   * address.
   *
   * When this setting is set to true, the Box UI will show an email field on the
   * file request form.
   *
   * This will default to the value on the existing file request.
   */
  is_email_required?: boolean;

  /**
   * Body param: An optional new status of the file request.
   *
   * When the status is set to `inactive`, the file request will no longer accept new
   * submissions, and any visitor to the file request URL will receive a `HTTP 404`
   * status code.
   *
   * This will default to the value on the existing file request.
   */
  status?: 'active' | 'inactive';

  /**
   * Body param: An optional new title for the file request. This can be used to
   * change the title of the file request.
   *
   * This will default to the value on the existing file request.
   */
  title?: string;

  /**
   * Header param: Ensures this item hasn't recently changed before making changes.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `412 Precondition Failed` if it has changed since.
   */
  'if-match'?: string;
}

export interface FileRequestCopyParams {
  /**
   * An optional new description for the file request. This can be used to change the
   * description of the file request.
   *
   * This will default to the value on the existing file request.
   */
  description?: string;

  /**
   * The date after which a file request will no longer accept new submissions.
   *
   * After this date, the `status` will automatically be set to `inactive`.
   *
   * This will default to the value on the existing file request.
   */
  expires_at?: string;

  /**
   * The folder to associate the new file request to.
   */
  folder?: FileRequestCopyParams.Folder;

  /**
   * Whether a file request submitter is required to provide a description of the
   * files they are submitting.
   *
   * When this setting is set to true, the Box UI will show a description field on
   * the file request form.
   *
   * This will default to the value on the existing file request.
   */
  is_description_required?: boolean;

  /**
   * Whether a file request submitter is required to provide their email address.
   *
   * When this setting is set to true, the Box UI will show an email field on the
   * file request form.
   *
   * This will default to the value on the existing file request.
   */
  is_email_required?: boolean;

  /**
   * An optional new status of the file request.
   *
   * When the status is set to `inactive`, the file request will no longer accept new
   * submissions, and any visitor to the file request URL will receive a `HTTP 404`
   * status code.
   *
   * This will default to the value on the existing file request.
   */
  status?: 'active' | 'inactive';

  /**
   * An optional new title for the file request. This can be used to change the title
   * of the file request.
   *
   * This will default to the value on the existing file request.
   */
  title?: string;
}

export namespace FileRequestCopyParams {
  /**
   * The folder to associate the new file request to.
   */
  export interface Folder {
    /**
     * The ID of the folder to associate the new file request to.
     */
    id: string;

    /**
     * The value will always be `folder`.
     */
    type?: 'folder';
  }
}

export declare namespace FileRequests {
  export {
    type FileRequest as FileRequest,
    type FileRequestUpdate as FileRequestUpdate,
    type FileRequestUpdateParams as FileRequestUpdateParams,
    type FileRequestCopyParams as FileRequestCopyParams,
  };
}
