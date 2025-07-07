// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LegalHoldPolicies extends APIResource {
  /**
   * Create a new legal hold policy.
   *
   * @example
   * ```ts
   * const legalHoldPolicy =
   *   await client.legalHoldPolicies.create({
   *     policy_name: 'Sales Policy',
   *   });
   * ```
   */
  create(body: LegalHoldPolicyCreateParams, options?: RequestOptions): APIPromise<LegalHoldPolicy> {
    return this._client.post('/legal_hold_policies', { body, ...options });
  }

  /**
   * Retrieve a legal hold policy.
   *
   * @example
   * ```ts
   * const legalHoldPolicy =
   *   await client.legalHoldPolicies.retrieve('324432');
   * ```
   */
  retrieve(legalHoldPolicyID: string, options?: RequestOptions): APIPromise<LegalHoldPolicy> {
    return this._client.get(path`/legal_hold_policies/${legalHoldPolicyID}`, options);
  }

  /**
   * Update legal hold policy.
   *
   * @example
   * ```ts
   * const legalHoldPolicy =
   *   await client.legalHoldPolicies.update('324432');
   * ```
   */
  update(
    legalHoldPolicyID: string,
    body: LegalHoldPolicyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LegalHoldPolicy> {
    return this._client.put(path`/legal_hold_policies/${legalHoldPolicyID}`, { body, ...options });
  }

  /**
   * Retrieves a list of legal hold policies that belong to an enterprise.
   *
   * @example
   * ```ts
   * const legalHoldPolicies =
   *   await client.legalHoldPolicies.list();
   * ```
   */
  list(
    query: LegalHoldPolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LegalHoldPolicyListResponse> {
    return this._client.get('/legal_hold_policies', { query, ...options });
  }

  /**
   * Delete an existing legal hold policy.
   *
   * This is an asynchronous process. The policy will not be fully deleted yet when
   * the response returns.
   *
   * @example
   * ```ts
   * await client.legalHoldPolicies.delete('324432');
   * ```
   */
  delete(legalHoldPolicyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/legal_hold_policies/${legalHoldPolicyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Legal Hold Policy information describes the basic characteristics of the Policy,
 * such as name, description, and filter dates.
 */
export interface LegalHoldPolicy extends LegalHoldPolicyMini {
  /**
   * Counts of assignments within this a legal hold policy by item type.
   */
  assignment_counts?: LegalHoldPolicy.AssignmentCounts;

  /**
   * When the legal hold policy object was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * When the policy release request was sent. (Because it can take time for a policy
   * to fully delete, this isn't quite the same time that the policy is fully
   * deleted).
   *
   * If `null`, the policy was not deleted.
   */
  deleted_at?: string;

  /**
   * Description of the legal hold policy. Optional property with a 500 character
   * limit.
   */
  description?: string;

  /**
   * User-specified, optional date filter applies to Custodian assignments only.
   */
  filter_ended_at?: string;

  /**
   * User-specified, optional date filter applies to Custodian assignments only.
   */
  filter_started_at?: string;

  /**
   * When the legal hold policy object was modified. Does not update when assignments
   * are added or removed.
   */
  modified_at?: string;

  /**
   * Name of the legal hold policy.
   */
  policy_name?: string;

  /**
   * Optional notes about why the policy was created.
   */
  release_notes?: string;

  /**
   * Possible values:
   *
   * - 'active' - the policy is not in a transition state.
   * - 'applying' - that the policy is in the process of being applied.
   * - 'releasing' - that the process is in the process of being released.
   * - 'released' - the policy is no longer active.
   */
  status?: 'active' | 'applying' | 'releasing' | 'released';
}

export namespace LegalHoldPolicy {
  /**
   * Counts of assignments within this a legal hold policy by item type.
   */
  export interface AssignmentCounts {
    /**
     * The number of files this policy is applied to.
     */
    file?: number;

    /**
     * The number of file versions this policy is applied to.
     */
    file_version?: number;

    /**
     * The number of folders this policy is applied to.
     */
    folder?: number;

    /**
     * The number of users this policy is applied to.
     */
    user?: number;
  }
}

/**
 * A mini legal hold policy.
 */
export interface LegalHoldPolicyMini {
  /**
   * The unique identifier for this legal hold policy.
   */
  id: string;

  /**
   * The value will always be `legal_hold_policy`.
   */
  type: 'legal_hold_policy';
}

export interface LegalHoldPolicyListResponse {
  /**
   * A list of legal hold policies.
   */
  entries?: Array<LegalHoldPolicy>;

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

export interface LegalHoldPolicyCreateParams {
  /**
   * The name of the policy.
   */
  policy_name: string;

  /**
   * A description for the policy.
   */
  description?: string;

  /**
   * The filter end date.
   *
   * When this policy is applied using a `custodian` legal hold assignments, it will
   * only apply to file versions created or uploaded inside of the date range. Other
   * assignment types, such as folders and files, will ignore the date filter.
   *
   * Required if `is_ongoing` is set to `false`.
   */
  filter_ended_at?: string;

  /**
   * The filter start date.
   *
   * When this policy is applied using a `custodian` legal hold assignments, it will
   * only apply to file versions created or uploaded inside of the date range. Other
   * assignment types, such as folders and files, will ignore the date filter.
   *
   * Required if `is_ongoing` is set to `false`.
   */
  filter_started_at?: string;

  /**
   * Whether new assignments under this policy should continue applying to files even
   * after initialization.
   *
   * When this policy is applied using a legal hold assignment, it will continue
   * applying the policy to any new file versions even after it has been applied.
   *
   * For example, if a legal hold assignment is placed on a user today, and that user
   * uploads a file tomorrow, that file will get held. This will continue until the
   * policy is retired.
   *
   * Required if no filter dates are set.
   */
  is_ongoing?: boolean;
}

export interface LegalHoldPolicyUpdateParams {
  /**
   * A description for the policy.
   */
  description?: string;

  /**
   * The name of the policy.
   */
  policy_name?: string;

  /**
   * Notes around why the policy was released.
   */
  release_notes?: string;
}

export interface LegalHoldPolicyListParams {
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
   * Limits results to policies for which the names start with this search term. This
   * is a case-insensitive prefix.
   */
  policy_name?: string;
}

export declare namespace LegalHoldPolicies {
  export {
    type LegalHoldPolicy as LegalHoldPolicy,
    type LegalHoldPolicyMini as LegalHoldPolicyMini,
    type LegalHoldPolicyListResponse as LegalHoldPolicyListResponse,
    type LegalHoldPolicyCreateParams as LegalHoldPolicyCreateParams,
    type LegalHoldPolicyUpdateParams as LegalHoldPolicyUpdateParams,
    type LegalHoldPolicyListParams as LegalHoldPolicyListParams,
  };
}
