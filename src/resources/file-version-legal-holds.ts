// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LegalHoldPolicyAssignmentsAPI from './legal-hold-policy-assignments';
import * as TasksAPI from './tasks';
import * as FilesAPI from './files/files';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FileVersionLegalHolds extends APIResource {
  /**
   * Retrieves information about the legal hold policies assigned to a file version.
   *
   * @example
   * ```ts
   * const fileVersionLegalHold =
   *   await client.fileVersionLegalHolds.retrieve('2348213');
   * ```
   */
  retrieve(fileVersionLegalHoldID: string, options?: RequestOptions): APIPromise<FileVersionLegalHold> {
    return this._client.get(path`/file_version_legal_holds/${fileVersionLegalHoldID}`, options);
  }

  /**
   * Get a list of file versions on legal hold for a legal hold assignment.
   *
   * Due to ongoing re-architecture efforts this API might not return all file
   * versions for this policy ID.
   *
   * Instead, this API will only return file versions held in the legacy
   * architecture. Two new endpoints will available to request any file versions held
   * in the new architecture.
   *
   * For file versions held in the new architecture, the
   * `GET /legal_hold_policy_assignments/:id/file_versions_on_hold` API can be used
   * to return all past file versions available for this policy assignment, and the
   * `GET /legal_hold_policy_assignments/:id/files_on_hold` API can be used to return
   * any current (latest) versions of a file under legal hold.
   *
   * The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to find
   * a list of policy assignments for a given policy ID.
   *
   * Once the re-architecture is completed this API will be deprecated.
   *
   * @example
   * ```ts
   * const fileVersionLegalHolds =
   *   await client.fileVersionLegalHolds.list({
   *     policy_id: 'policy_id',
   *   });
   * ```
   */
  list(
    query: FileVersionLegalHoldListParams,
    options?: RequestOptions,
  ): APIPromise<FileVersionLegalHoldListResponse> {
    return this._client.get('/file_version_legal_holds', { query, ...options });
  }
}

/**
 * File version legal hold is an entity representing all holds on a File Version.
 */
export interface FileVersionLegalHold {
  /**
   * The unique identifier for this file version legal hold.
   */
  id?: string;

  /**
   * Time that this File-Version-Legal-Hold was deleted.
   */
  deleted_at?: string;

  /**
   * A mini representation of a file, used when nested under another resource.
   */
  file?: TasksAPI.FileMini | null;

  /**
   * A mini representation of a file version, used when nested within another
   * resource.
   */
  file_version?: FilesAPI.FileVersionMini;

  /**
   * List of assignments contributing to this Hold.
   */
  legal_hold_policy_assignments?: Array<LegalHoldPolicyAssignmentsAPI.LegalHoldPolicyAssignment>;

  /**
   * The value will always be `file_version_legal_hold`.
   */
  type?: 'file_version_legal_hold';
}

export interface FileVersionLegalHoldListResponse {
  /**
   * A list of file version legal holds.
   */
  entries?: Array<FileVersionLegalHold>;

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

export interface FileVersionLegalHoldListParams {
  /**
   * The ID of the legal hold policy to get the file version legal holds for.
   */
  policy_id: string;

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

export declare namespace FileVersionLegalHolds {
  export {
    type FileVersionLegalHold as FileVersionLegalHold,
    type FileVersionLegalHoldListResponse as FileVersionLegalHoldListResponse,
    type FileVersionLegalHoldListParams as FileVersionLegalHoldListParams,
  };
}
