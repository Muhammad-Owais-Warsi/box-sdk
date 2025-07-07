// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CollaborationWhitelistExemptTargets extends APIResource {
  /**
   * Exempts a user from the restrictions set out by the allowed list of domains for
   * collaborations.
   *
   * @example
   * ```ts
   * const exemptTarget =
   *   await client.collaborationWhitelistExemptTargets.create({
   *     user: { id: '23522323' },
   *   });
   * ```
   */
  create(
    body: CollaborationWhitelistExemptTargetCreateParams,
    options?: RequestOptions,
  ): APIPromise<ExemptTarget> {
    return this._client.post('/collaboration_whitelist_exempt_targets', { body, ...options });
  }

  /**
   * Returns a users who has been exempt from the collaboration domain restrictions.
   *
   * @example
   * ```ts
   * const exemptTarget =
   *   await client.collaborationWhitelistExemptTargets.retrieve(
   *     '984923',
   *   );
   * ```
   */
  retrieve(collaborationWhitelistExemptTargetID: string, options?: RequestOptions): APIPromise<ExemptTarget> {
    return this._client.get(
      path`/collaboration_whitelist_exempt_targets/${collaborationWhitelistExemptTargetID}`,
      options,
    );
  }

  /**
   * Returns a list of users who have been exempt from the collaboration domain
   * restrictions.
   *
   * @example
   * ```ts
   * const collaborationWhitelistExemptTargets =
   *   await client.collaborationWhitelistExemptTargets.list();
   * ```
   */
  list(
    query: CollaborationWhitelistExemptTargetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollaborationWhitelistExemptTargetListResponse> {
    return this._client.get('/collaboration_whitelist_exempt_targets', { query, ...options });
  }

  /**
   * Removes a user's exemption from the restrictions set out by the allowed list of
   * domains for collaborations.
   *
   * @example
   * ```ts
   * await client.collaborationWhitelistExemptTargets.delete(
   *   '984923',
   * );
   * ```
   */
  delete(collaborationWhitelistExemptTargetID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(
      path`/collaboration_whitelist_exempt_targets/${collaborationWhitelistExemptTargetID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

/**
 * The user that is exempt from any of the restrictions imposed by the list of
 * allowed collaboration domains for this enterprise.
 */
export interface ExemptTarget {
  /**
   * The unique identifier for this exemption.
   */
  id?: string;

  /**
   * The time the entry was created.
   */
  created_at?: string;

  /**
   * A representation of a Box enterprise.
   */
  enterprise?: ExemptTarget.Enterprise;

  /**
   * The time the entry was modified.
   */
  modified_at?: string;

  /**
   * The value will always be `collaboration_whitelist_exempt_target`.
   */
  type?: 'collaboration_whitelist_exempt_target';

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  user?: RetentionPoliciesAPI.UserMini;
}

export namespace ExemptTarget {
  /**
   * A representation of a Box enterprise.
   */
  export interface Enterprise {
    /**
     * The unique identifier for this enterprise.
     */
    id?: string;

    /**
     * The name of the enterprise.
     */
    name?: string;

    /**
     * The value will always be `enterprise`.
     */
    type?: 'enterprise';
  }
}

export interface CollaborationWhitelistExemptTargetListResponse {
  /**
   * A list of users exempt from any of the restrictions imposed by the list of
   * allowed collaboration domains for this enterprise.
   */
  entries?: Array<ExemptTarget>;

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

export interface CollaborationWhitelistExemptTargetCreateParams {
  /**
   * The user to exempt.
   */
  user: CollaborationWhitelistExemptTargetCreateParams.User;
}

export namespace CollaborationWhitelistExemptTargetCreateParams {
  /**
   * The user to exempt.
   */
  export interface User {
    /**
     * The ID of the user to exempt.
     */
    id: string;
  }
}

export interface CollaborationWhitelistExemptTargetListParams {
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

export declare namespace CollaborationWhitelistExemptTargets {
  export {
    type ExemptTarget as ExemptTarget,
    type CollaborationWhitelistExemptTargetListResponse as CollaborationWhitelistExemptTargetListResponse,
    type CollaborationWhitelistExemptTargetCreateParams as CollaborationWhitelistExemptTargetCreateParams,
    type CollaborationWhitelistExemptTargetListParams as CollaborationWhitelistExemptTargetListParams,
  };
}
