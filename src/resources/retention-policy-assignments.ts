// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as TasksAPI from './tasks';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RetentionPolicyAssignments extends APIResource {
  /**
   * Assigns a retention policy to an item.
   *
   * @example
   * ```ts
   * const retentionPolicyAssignment =
   *   await client.retentionPolicyAssignments.create({
   *     assign_to: { type: 'metadata_template' },
   *     policy_id: '173463',
   *   });
   * ```
   */
  create(
    body: RetentionPolicyAssignmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<RetentionPolicyAssignment> {
    return this._client.post('/retention_policy_assignments', { body, ...options });
  }

  /**
   * Retrieves a retention policy assignment.
   *
   * @example
   * ```ts
   * const retentionPolicyAssignment =
   *   await client.retentionPolicyAssignments.retrieve(
   *     '1233123',
   *   );
   * ```
   */
  retrieve(
    retentionPolicyAssignmentID: string,
    query: RetentionPolicyAssignmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RetentionPolicyAssignment> {
    return this._client.get(path`/retention_policy_assignments/${retentionPolicyAssignmentID}`, {
      query,
      ...options,
    });
  }

  /**
   * Removes a retention policy assignment applied to content.
   *
   * @example
   * ```ts
   * await client.retentionPolicyAssignments.delete('1233123');
   * ```
   */
  delete(retentionPolicyAssignmentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/retention_policy_assignments/${retentionPolicyAssignmentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a list of file versions under retention for a retention policy
   * assignment.
   *
   * @example
   * ```ts
   * const filesUnderRetention =
   *   await client.retentionPolicyAssignments.listFileVersionsUnderRetention(
   *     '1233123',
   *   );
   * ```
   */
  listFileVersionsUnderRetention(
    retentionPolicyAssignmentID: string,
    query: RetentionPolicyAssignmentListFileVersionsUnderRetentionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesUnderRetention> {
    return this._client.get(
      path`/retention_policy_assignments/${retentionPolicyAssignmentID}/file_versions_under_retention`,
      { query, ...options },
    );
  }

  /**
   * Returns a list of files under retention for a retention policy assignment.
   *
   * @example
   * ```ts
   * const filesUnderRetention =
   *   await client.retentionPolicyAssignments.listFilesUnderRetention(
   *     '1233123',
   *   );
   * ```
   */
  listFilesUnderRetention(
    retentionPolicyAssignmentID: string,
    query: RetentionPolicyAssignmentListFilesUnderRetentionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesUnderRetention> {
    return this._client.get(
      path`/retention_policy_assignments/${retentionPolicyAssignmentID}/files_under_retention`,
      { query, ...options },
    );
  }
}

export interface FilesUnderRetention {
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

/**
 * A retention assignment represents a rule specifying the files a retention policy
 * retains. Assignments can retain files based on their folder or metadata, or hold
 * all files in the enterprise.
 */
export interface RetentionPolicyAssignment {
  /**
   * The unique identifier for a retention policy assignment.
   */
  id: string;

  /**
   * The value will always be `retention_policy_assignment`.
   */
  type: 'retention_policy_assignment';

  /**
   * When the retention policy assignment object was created.
   */
  assigned_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  assigned_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The `type` and `id` of the content that is under retention. The `type` can
   * either be `folder` `enterprise`, or `metadata_template`.
   */
  assigned_to?: RetentionPolicyAssignment.AssignedTo;

  /**
   * An array of field objects. Values are only returned if the `assigned_to` type is
   * `metadata_template`. Otherwise, the array is blank.
   */
  filter_fields?: Array<RetentionPolicyAssignment.FilterField | null> | null;

  /**
   * A mini representation of a retention policy, used when nested within another
   * resource.
   */
  retention_policy?: RetentionPoliciesAPI.RetentionPolicyMini;

  /**
   * The date the retention policy assignment begins. If the `assigned_to` type is
   * `metadata_template`, this field can be a date field's metadata attribute key id.
   */
  start_date_field?: string;
}

export namespace RetentionPolicyAssignment {
  /**
   * The `type` and `id` of the content that is under retention. The `type` can
   * either be `folder` `enterprise`, or `metadata_template`.
   */
  export interface AssignedTo {
    /**
     * The ID of the folder, enterprise, or metadata template the policy is assigned
     * to. Set to null or omit when type is set to enterprise.
     */
    id?: string | null;

    /**
     * The type of resource the policy is assigned to.
     */
    type?: 'folder' | 'enterprise' | 'metadata_template';
  }

  export interface FilterField {
    /**
     * The metadata attribute key id.
     */
    field?: string | null;

    /**
     * The metadata attribute field id. For value, only enum and multiselect types are
     * supported.
     */
    value?: string | null;
  }
}

export interface RetentionPolicyAssignmentCreateParams {
  /**
   * The item to assign the policy to.
   */
  assign_to: RetentionPolicyAssignmentCreateParams.AssignTo;

  /**
   * The ID of the retention policy to assign.
   */
  policy_id: string;

  /**
   * If the `assign_to` type is `metadata_template`, then optionally add the
   * `filter_fields` parameter which will require an array of objects with a field
   * entry and a value entry. Currently only one object of `field` and `value` is
   * supported.
   */
  filter_fields?: Array<RetentionPolicyAssignmentCreateParams.FilterField>;

  /**
   * The date the retention policy assignment begins.
   *
   * If the `assigned_to` type is `metadata_template`, this field can be a date
   * field's metadata attribute key id.
   */
  start_date_field?: string;
}

export namespace RetentionPolicyAssignmentCreateParams {
  /**
   * The item to assign the policy to.
   */
  export interface AssignTo {
    /**
     * The type of item to assign the policy to.
     */
    type: 'enterprise' | 'folder' | 'metadata_template';

    /**
     * The ID of item to assign the policy to. Set to `null` or omit when `type` is set
     * to `enterprise`.
     */
    id?: string | null;
  }

  export interface FilterField {
    /**
     * The metadata attribute key id.
     */
    field?: string;

    /**
     * The metadata attribute field id. For value, only enum and multiselect types are
     * supported.
     */
    value?: string;
  }
}

export interface RetentionPolicyAssignmentRetrieveParams {
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

export interface RetentionPolicyAssignmentListFileVersionsUnderRetentionParams {
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

export interface RetentionPolicyAssignmentListFilesUnderRetentionParams {
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

export declare namespace RetentionPolicyAssignments {
  export {
    type FilesUnderRetention as FilesUnderRetention,
    type RetentionPolicyAssignment as RetentionPolicyAssignment,
    type RetentionPolicyAssignmentCreateParams as RetentionPolicyAssignmentCreateParams,
    type RetentionPolicyAssignmentRetrieveParams as RetentionPolicyAssignmentRetrieveParams,
    type RetentionPolicyAssignmentListFileVersionsUnderRetentionParams as RetentionPolicyAssignmentListFileVersionsUnderRetentionParams,
    type RetentionPolicyAssignmentListFilesUnderRetentionParams as RetentionPolicyAssignmentListFilesUnderRetentionParams,
  };
}
