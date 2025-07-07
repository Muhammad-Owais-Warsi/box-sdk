// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LegalHoldPoliciesAPI from './legal-hold-policies';
import * as RetentionPoliciesAPI from './retention-policies';
import * as TasksAPI from './tasks';
import * as FilesAPI from './files/files';
import * as VersionsAPI from './files/versions';
import * as FoldersAPI from './folders/folders';
import * as WebLinksAPI from './web-links/web-links';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LegalHoldPolicyAssignments extends APIResource {
  /**
   * Retrieve a legal hold policy assignment.
   *
   * @example
   * ```ts
   * const legalHoldPolicyAssignment =
   *   await client.legalHoldPolicyAssignments.retrieve(
   *     '753465',
   *   );
   * ```
   */
  retrieve(
    legalHoldPolicyAssignmentID: string,
    options?: RequestOptions,
  ): APIPromise<LegalHoldPolicyAssignment> {
    return this._client.get(path`/legal_hold_policy_assignments/${legalHoldPolicyAssignmentID}`, options);
  }

  /**
   * Retrieves a list of items a legal hold policy has been assigned to.
   *
   * @example
   * ```ts
   * const legalHoldPolicyAssignments =
   *   await client.legalHoldPolicyAssignments.list({
   *     policy_id: 'policy_id',
   *   });
   * ```
   */
  list(
    query: LegalHoldPolicyAssignmentListParams,
    options?: RequestOptions,
  ): APIPromise<LegalHoldPolicyAssignmentListResponse> {
    return this._client.get('/legal_hold_policy_assignments', { query, ...options });
  }

  /**
   * Assign a legal hold to a file, file version, folder, or user.
   *
   * @example
   * ```ts
   * const legalHoldPolicyAssignment =
   *   await client.legalHoldPolicyAssignments.assign({
   *     assign_to: { id: '6564564', type: 'folder' },
   *     policy_id: '123244',
   *   });
   * ```
   */
  assign(
    body: LegalHoldPolicyAssignmentAssignParams,
    options?: RequestOptions,
  ): APIPromise<LegalHoldPolicyAssignment> {
    return this._client.post('/legal_hold_policy_assignments', { body, ...options });
  }

  /**
   * Get a list of previous file versions for a legal hold assignment.
   *
   * In some cases you may only need the latest file versions instead. In these
   * cases, use the `GET /legal_hold_policy_assignments/:id/files_on_hold` API
   * instead to return any current (latest) versions of a file for this legal hold
   * policy assignment.
   *
   * Due to ongoing re-architecture efforts this API might not return all files held
   * for this policy ID. Instead, this API will only return past file versions held
   * in the newly developed architecture. The `GET /file_version_legal_holds` API can
   * be used to fetch current and past versions of files held within the legacy
   * architecture.
   *
   * This endpoint does not support returning any content that is on hold due to a
   * Custodian collaborating on a Hub.
   *
   * The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to find
   * a list of policy assignments for a given policy ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.legalHoldPolicyAssignments.listFileVersionsOnHold(
   *     '753465',
   *   );
   * ```
   */
  listFileVersionsOnHold(
    legalHoldPolicyAssignmentID: string,
    query: LegalHoldPolicyAssignmentListFileVersionsOnHoldParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LegalHoldPolicyAssignmentListFileVersionsOnHoldResponse> {
    return this._client.get(
      path`/legal_hold_policy_assignments/${legalHoldPolicyAssignmentID}/file_versions_on_hold`,
      { query, ...options },
    );
  }

  /**
   * Get a list of files with current file versions for a legal hold assignment.
   *
   * In some cases you may want to get previous file versions instead. In these
   * cases, use the `GET /legal_hold_policy_assignments/:id/file_versions_on_hold`
   * API instead to return any previous versions of a file for this legal hold policy
   * assignment.
   *
   * Due to ongoing re-architecture efforts this API might not return all file
   * versions held for this policy ID. Instead, this API will only return the latest
   * file version held in the newly developed architecture. The
   * `GET /file_version_legal_holds` API can be used to fetch current and past
   * versions of files held within the legacy architecture.
   *
   * This endpoint does not support returning any content that is on hold due to a
   * Custodian collaborating on a Hub.
   *
   * The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to find
   * a list of policy assignments for a given policy ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.legalHoldPolicyAssignments.listFilesOnHold(
   *     '753465',
   *   );
   * ```
   */
  listFilesOnHold(
    legalHoldPolicyAssignmentID: string,
    query: LegalHoldPolicyAssignmentListFilesOnHoldParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LegalHoldPolicyAssignmentListFilesOnHoldResponse> {
    return this._client.get(
      path`/legal_hold_policy_assignments/${legalHoldPolicyAssignmentID}/files_on_hold`,
      { query, ...options },
    );
  }

  /**
   * Remove a legal hold from an item.
   *
   * This is an asynchronous process. The policy will not be fully removed yet when
   * the response returns.
   *
   * @example
   * ```ts
   * await client.legalHoldPolicyAssignments.unassign('753465');
   * ```
   */
  unassign(legalHoldPolicyAssignmentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/legal_hold_policy_assignments/${legalHoldPolicyAssignmentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LegalHoldPolicyAssignment {
  /**
   * The unique identifier for this legal hold assignment.
   */
  id?: string;

  /**
   * When the legal hold policy assignment object was created.
   */
  assigned_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  assigned_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The item that the the legal hold policy is assigned to. Includes type and ID.
   */
  assigned_to?: FilesAPI.File | FoldersAPI.Folder | WebLinksAPI.WebLink;

  /**
   * When the assignment release request was sent. (Because it can take time for an
   * assignment to fully delete, this isn't quite the same time that the assignment
   * is fully deleted). If null, Assignment was not deleted.
   */
  deleted_at?: string;

  /**
   * A mini legal hold policy.
   */
  legal_hold_policy?: LegalHoldPoliciesAPI.LegalHoldPolicyMini;

  /**
   * The value will always be `legal_hold_policy_assignment`.
   */
  type?: 'legal_hold_policy_assignment';
}

export interface LegalHoldPolicyAssignmentListResponse {
  /**
   * A list of legal hold policy assignments.
   */
  entries?: Array<LegalHoldPolicyAssignment>;

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

export interface LegalHoldPolicyAssignmentListFileVersionsOnHoldResponse {
  /**
   * A list of file versions on hold.
   */
  entries?: Array<VersionsAPI.FileVersion>;

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

export interface LegalHoldPolicyAssignmentListFilesOnHoldResponse {
  /**
   * A list of files.
   */
  entries?: Array<TasksAPI.FileMini | null>;

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

export interface LegalHoldPolicyAssignmentListParams {
  /**
   * The ID of the legal hold policy.
   */
  policy_id: string;

  /**
   * Filters the results by the ID of item the policy was applied to.
   */
  assign_to_id?: string;

  /**
   * Filters the results by the type of item the policy was applied to.
   */
  assign_to_type?: 'file' | 'file_version' | 'folder' | 'user' | 'ownership' | 'interactions';

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

export interface LegalHoldPolicyAssignmentAssignParams {
  /**
   * The item to assign the policy to.
   */
  assign_to: LegalHoldPolicyAssignmentAssignParams.AssignTo;

  /**
   * The ID of the policy to assign.
   */
  policy_id: string;
}

export namespace LegalHoldPolicyAssignmentAssignParams {
  /**
   * The item to assign the policy to.
   */
  export interface AssignTo {
    /**
     * The ID of item to assign the policy to.
     */
    id: string;

    /**
     * The type of item to assign the policy to.
     */
    type: 'file' | 'file_version' | 'folder' | 'user' | 'ownership' | 'interaction';
  }
}

export interface LegalHoldPolicyAssignmentListFileVersionsOnHoldParams {
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

export interface LegalHoldPolicyAssignmentListFilesOnHoldParams {
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

export declare namespace LegalHoldPolicyAssignments {
  export {
    type LegalHoldPolicyAssignment as LegalHoldPolicyAssignment,
    type LegalHoldPolicyAssignmentListResponse as LegalHoldPolicyAssignmentListResponse,
    type LegalHoldPolicyAssignmentListFileVersionsOnHoldResponse as LegalHoldPolicyAssignmentListFileVersionsOnHoldResponse,
    type LegalHoldPolicyAssignmentListFilesOnHoldResponse as LegalHoldPolicyAssignmentListFilesOnHoldResponse,
    type LegalHoldPolicyAssignmentListParams as LegalHoldPolicyAssignmentListParams,
    type LegalHoldPolicyAssignmentAssignParams as LegalHoldPolicyAssignmentAssignParams,
    type LegalHoldPolicyAssignmentListFileVersionsOnHoldParams as LegalHoldPolicyAssignmentListFileVersionsOnHoldParams,
    type LegalHoldPolicyAssignmentListFilesOnHoldParams as LegalHoldPolicyAssignmentListFilesOnHoldParams,
  };
}
