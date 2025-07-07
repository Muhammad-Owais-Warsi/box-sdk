// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPolicyAssignmentsAPI from './retention-policy-assignments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RetentionPolicies extends APIResource {
  /**
   * Creates a retention policy.
   *
   * @example
   * ```ts
   * const retentionPolicy =
   *   await client.retentionPolicies.create({
   *     disposition_action: 'permanently_delete',
   *     policy_name: 'Some Policy Name',
   *     policy_type: 'finite',
   *   });
   * ```
   */
  create(body: RetentionPolicyCreateParams, options?: RequestOptions): APIPromise<RetentionPolicy> {
    return this._client.post('/retention_policies', { body, ...options });
  }

  /**
   * Retrieves a retention policy.
   *
   * @example
   * ```ts
   * const retentionPolicy =
   *   await client.retentionPolicies.retrieve('982312');
   * ```
   */
  retrieve(
    retentionPolicyID: string,
    query: RetentionPolicyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RetentionPolicy> {
    return this._client.get(path`/retention_policies/${retentionPolicyID}`, { query, ...options });
  }

  /**
   * Updates a retention policy.
   *
   * @example
   * ```ts
   * const retentionPolicy =
   *   await client.retentionPolicies.update('982312');
   * ```
   */
  update(
    retentionPolicyID: string,
    body: RetentionPolicyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RetentionPolicy> {
    return this._client.put(path`/retention_policies/${retentionPolicyID}`, { body, ...options });
  }

  /**
   * Retrieves all of the retention policies for an enterprise.
   *
   * @example
   * ```ts
   * const retentionPolicies =
   *   await client.retentionPolicies.list();
   * ```
   */
  list(
    query: RetentionPolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RetentionPolicyListResponse> {
    return this._client.get('/retention_policies', { query, ...options });
  }

  /**
   * Permanently deletes a retention policy.
   *
   * @example
   * ```ts
   * await client.retentionPolicies.delete('982312');
   * ```
   */
  delete(retentionPolicyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/retention_policies/${retentionPolicyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a list of all retention policy assignments associated with a specified
   * retention policy.
   *
   * @example
   * ```ts
   * const response =
   *   await client.retentionPolicies.listAssignments('982312');
   * ```
   */
  listAssignments(
    retentionPolicyID: string,
    query: RetentionPolicyListAssignmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RetentionPolicyListAssignmentsResponse> {
    return this._client.get(path`/retention_policies/${retentionPolicyID}/assignments`, {
      query,
      ...options,
    });
  }
}

/**
 * A retention policy blocks permanent deletion of content for a specified amount
 * of time. Admins can create retention policies and then later assign them to
 * specific folders, metadata templates, or their entire enterprise. To use this
 * feature, you must have the manage retention policies scope enabled for your API
 * key via your application management console.
 */
export interface RetentionPolicy extends RetentionPolicyMini {
  /**
   * Determines if owners and co-owners of items under the policy are notified when
   * the retention duration is about to end.
   */
  are_owners_notified?: boolean;

  /**
   * Counts the retention policy assignments for each item type.
   */
  assignment_counts?: RetentionPolicy.AssignmentCounts;

  /**
   * Determines if the owner of items under the policy can extend the retention when
   * the original retention duration is about to end.
   */
  can_owner_extend_retention?: boolean;

  /**
   * When the retention policy object was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: UserMini;

  /**
   * A list of users notified when the retention policy duration is about to end.
   */
  custom_notification_recipients?: Array<UserMini>;

  /**
   * The additional text description of the retention policy.
   */
  description?: string;

  /**
   * When the retention policy object was last modified.
   */
  modified_at?: string;

  /**
   * The type of the retention policy. A retention policy type can either be
   * `finite`, where a specific amount of time to retain the content is known
   * upfront, or `indefinite`, where the amount of time to retain the content is
   * still unknown.
   */
  policy_type?: 'finite' | 'indefinite';

  /**
   * Specifies the retention type:
   *
   * - `modifiable`: You can modify the retention policy. For example, you can add or
   *   remove folders, shorten or lengthen the policy duration, or delete the
   *   assignment. Use this type if your retention policy is not related to any
   *   regulatory purposes.
   *
   * - `non-modifiable`: You can modify the retention policy only in a limited way:
   *   add a folder, lengthen the duration, retire the policy, change the disposition
   *   action or notification settings. You cannot perform other actions, such as
   *   deleting the assignment or shortening the policy duration. Use this type to
   *   ensure compliance with regulatory retention policies.
   */
  retention_type?: 'modifiable' | 'non_modifiable';

  /**
   * The status of the retention policy. The status of a policy will be `active`,
   * unless explicitly retired by an administrator, in which case the status will be
   * `retired`. Once a policy has been retired, it cannot become active again.
   */
  status?: 'active' | 'retired';
}

export namespace RetentionPolicy {
  /**
   * Counts the retention policy assignments for each item type.
   */
  export interface AssignmentCounts {
    /**
     * The number of enterprise assignments this policy has. The maximum value is 1.
     */
    enterprise?: number;

    /**
     * The number of folder assignments this policy has.
     */
    folder?: number;

    /**
     * The number of metadata template assignments this policy has.
     */
    metadata_template?: number;
  }
}

export interface RetentionPolicyMini {
  /**
   * The unique identifier that represents a retention policy.
   */
  id: string;

  /**
   * The value will always be `retention_policy`.
   */
  type: 'retention_policy';

  /**
   * The disposition action of the retention policy. This action can be
   * `permanently_delete`, which will cause the content retained by the policy to be
   * permanently deleted, or `remove_retention`, which will lift the retention policy
   * from the content, allowing it to be deleted by users, once the retention policy
   * has expired.
   */
  disposition_action?: 'permanently_delete' | 'remove_retention';

  /**
   * The name given to the retention policy.
   */
  policy_name?: string;

  /**
   * The length of the retention policy. This value specifies the duration in days
   * that the retention policy will be active for after being assigned to content. If
   * the policy has a `policy_type` of `indefinite`, the `retention_length` will also
   * be `indefinite`.
   */
  retention_length?: string;
}

/**
 * A mini representation of a user, used when nested within another resource.
 */
export interface UserBase {
  /**
   * The unique identifier for this user.
   */
  id: string;

  /**
   * The value will always be `user`.
   */
  type: 'user';
}

/**
 * A mini representation of a user, as can be returned when nested within other
 * resources.
 */
export interface UserMini extends UserBase {
  /**
   * The primary email address of this user.
   */
  login?: string;

  /**
   * The display name of this user.
   */
  name?: string;
}

export interface RetentionPolicyListResponse {
  /**
   * A list in which each entry represents a retention policy object.
   */
  entries?: Array<RetentionPolicy>;

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
}

export interface RetentionPolicyListAssignmentsResponse {
  /**
   * A list of retention policy assignments.
   */
  entries?: Array<RetentionPolicyAssignmentsAPI.RetentionPolicyAssignment>;

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
}

export interface RetentionPolicyCreateParams {
  /**
   * The disposition action of the retention policy. `permanently_delete` deletes the
   * content retained by the policy permanently. `remove_retention` lifts retention
   * policy from the content, allowing it to be deleted by users once the retention
   * policy has expired.
   */
  disposition_action: 'permanently_delete' | 'remove_retention';

  /**
   * The name for the retention policy.
   */
  policy_name: string;

  /**
   * The type of the retention policy. A retention policy type can either be
   * `finite`, where a specific amount of time to retain the content is known
   * upfront, or `indefinite`, where the amount of time to retain the content is
   * still unknown.
   */
  policy_type: 'finite' | 'indefinite';

  /**
   * Whether owner and co-owners of a file are notified when the policy nears
   * expiration.
   */
  are_owners_notified?: boolean;

  /**
   * Whether the owner of a file will be allowed to extend the retention.
   */
  can_owner_extend_retention?: boolean;

  /**
   * A list of users notified when the retention policy duration is about to end.
   */
  custom_notification_recipients?: Array<UserMini>;

  /**
   * The additional text description of the retention policy.
   */
  description?: string;

  /**
   * The length of the retention policy. This value specifies the duration in days
   * that the retention policy will be active for after being assigned to content. If
   * the policy has a `policy_type` of `indefinite`, the `retention_length` will also
   * be `indefinite`.
   */
  retention_length?: string | null | number;

  /**
   * Specifies the retention type:
   *
   * - `modifiable`: You can modify the retention policy. For example, you can add or
   *   remove folders, shorten or lengthen the policy duration, or delete the
   *   assignment. Use this type if your retention policy is not related to any
   *   regulatory purposes.
   *
   * - `non_modifiable`: You can modify the retention policy only in a limited way:
   *   add a folder, lengthen the duration, retire the policy, change the disposition
   *   action or notification settings. You cannot perform other actions, such as
   *   deleting the assignment or shortening the policy duration. Use this type to
   *   ensure compliance with regulatory retention policies.
   */
  retention_type?: 'modifiable' | 'non_modifiable';
}

export interface RetentionPolicyRetrieveParams {
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

export interface RetentionPolicyUpdateParams {
  /**
   * Determines if owners and co-owners of items under the policy are notified when
   * the retention duration is about to end.
   */
  are_owners_notified?: boolean | null;

  /**
   * Determines if the owner of items under the policy can extend the retention when
   * the original retention duration is about to end.
   */
  can_owner_extend_retention?: boolean | null;

  /**
   * A list of users notified when the retention duration is about to end.
   */
  custom_notification_recipients?: Array<UserBase> | null;

  /**
   * The additional text description of the retention policy.
   */
  description?: string | null;

  /**
   * The disposition action of the retention policy. This action can be
   * `permanently_delete`, which will cause the content retained by the policy to be
   * permanently deleted, or `remove_retention`, which will lift the retention policy
   * from the content, allowing it to be deleted by users, once the retention policy
   * has expired. You can use `null` if you don't want to change
   * `disposition_action`.
   */
  disposition_action?: 'permanently_delete' | 'remove_retention' | (string & {});

  /**
   * The name for the retention policy.
   */
  policy_name?: string | null;

  /**
   * The length of the retention policy. This value specifies the duration in days
   * that the retention policy will be active for after being assigned to content. If
   * the policy has a `policy_type` of `indefinite`, the `retention_length` will also
   * be `indefinite`.
   */
  retention_length?: string | null | number;

  /**
   * Specifies the retention type:
   *
   * - `modifiable`: You can modify the retention policy. For example, you can add or
   *   remove folders, shorten or lengthen the policy duration, or delete the
   *   assignment. Use this type if your retention policy is not related to any
   *   regulatory purposes.
   * - `non-modifiable`: You can modify the retention policy only in a limited way:
   *   add a folder, lengthen the duration, retire the policy, change the disposition
   *   action or notification settings. You cannot perform other actions, such as
   *   deleting the assignment or shortening the policy duration. Use this type to
   *   ensure compliance with regulatory retention policies.
   *
   * When updating a retention policy, you can use `non-modifiable` type only. You
   * can convert a `modifiable` policy to `non-modifiable`, but not the other way
   * around.
   */
  retention_type?: string | null;

  /**
   * Used to retire a retention policy.
   *
   * If not retiring a policy, do not include this parameter or set it to `null`.
   */
  status?: string | null;
}

export interface RetentionPolicyListParams {
  /**
   * Filters results by the ID of the user who created policy.
   */
  created_by_user_id?: string;

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
   */
  marker?: string;

  /**
   * Filters results by a case sensitive prefix of the name of retention policies.
   */
  policy_name?: string;

  /**
   * Filters results by the type of retention policy.
   */
  policy_type?: 'finite' | 'indefinite';
}

export interface RetentionPolicyListAssignmentsParams {
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
   */
  marker?: string;

  /**
   * The type of the retention policy assignment to retrieve.
   */
  type?: 'folder' | 'enterprise' | 'metadata_template';
}

export declare namespace RetentionPolicies {
  export {
    type RetentionPolicy as RetentionPolicy,
    type RetentionPolicyMini as RetentionPolicyMini,
    type UserBase as UserBase,
    type UserMini as UserMini,
    type RetentionPolicyListResponse as RetentionPolicyListResponse,
    type RetentionPolicyListAssignmentsResponse as RetentionPolicyListAssignmentsResponse,
    type RetentionPolicyCreateParams as RetentionPolicyCreateParams,
    type RetentionPolicyRetrieveParams as RetentionPolicyRetrieveParams,
    type RetentionPolicyUpdateParams as RetentionPolicyUpdateParams,
    type RetentionPolicyListParams as RetentionPolicyListParams,
    type RetentionPolicyListAssignmentsParams as RetentionPolicyListAssignmentsParams,
  };
}
